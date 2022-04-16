import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import Topo from "./componentes/Topo";
import Detalhes from "./componentes/Detalhes";
import Itens from "./componentes/Itens";

export default function Cesta({ topo, detalhes, itens }) {
    return (
        <ScrollView>
            <Topo { ...topo } />
            <View style={ styleCesta.cesta }>
                <Detalhes { ...detalhes } />
                <Itens { ...itens } />
            </View>
        </ScrollView>
    );
}

const styleCesta = StyleSheet.create({
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
});
