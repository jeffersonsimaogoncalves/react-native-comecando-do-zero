import React from "react";
import { Dimensions, Image, StyleSheet } from "react-native";
import topo from "../../../../assets/topo.png";
import Texto from "../../../componentes/Texto";

const width = Dimensions.get('screen').width;

export default function Topo() {
    return (
        <>
            <Image source={ topo } style={ styleTopo.imagemTopo } />
            <Texto style={ styleTopo.titulo }>Detalhe da Cesta</Texto>
        </>
    );
}

const styleTopo = StyleSheet.create({
    imagemTopo: {
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
