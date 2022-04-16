import React from "react";
import { Dimensions, Image, StyleSheet, Text } from "react-native";
import topo from '../../assets/topo.png';

const width = Dimensions.get('screen').width;

export default function Cesta() {
    return (
        <>
            <Image source={ topo } style={ style.topo } />
            <Text style={ style.titulo }>Detalhe da Cesta</Text>
        </>
    );
}

const style = StyleSheet.create({
    topo: {
        width: "100%",
        height: 578 / 768 * width,
    },
    titulo: {
        width: "100%",
        position: "absolute",
        textAlign: "center",
        fontSize: 16,
        lineHeight: 26,
        color: "white",
        fontWeight: "bold",
        padding: 16,
    },
});
