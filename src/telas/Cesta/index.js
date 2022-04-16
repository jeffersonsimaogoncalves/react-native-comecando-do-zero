import React from "react";
import { StyleSheet, View } from "react-native";
import Topo from "./componentes/Topo";
import Detalhes from "./componentes/Detalhes";

export default function Cesta({ topo, detalhes }) {
    return (
        <>
            <Topo { ...topo } />
            <View style={ styleCesta.cesta }>
                <Detalhes { ...detalhes } />
            </View>
        </>
    );
}

const styleCesta = StyleSheet.create({
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
});
