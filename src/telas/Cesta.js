import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import topo from '../../assets/topo.png';
import logo from '../../assets/logo.png';
import Texto from "../componentes/Texto";

const width = Dimensions.get('screen').width;

export default function Cesta() {
    return (
        <>
            <Image source={ topo } style={ styleCesta.imagemTopo } />
            <Texto style={ styleCesta.titulo }>Detalhe da Cesta</Texto>
            <View style={ styleCesta.cesta }>
                <Texto style={ styleCesta.nome }>Cesta de Verduras</Texto>
                <View style={ styleCesta.fazenda }>
                    <Image source={ logo } style={ styleCesta.imagemFazenda } />
                    <Texto style={ styleCesta.nomeFazenda }>Jenny Jack Farm</Texto>
                </View>
                <Texto style={ styleCesta.descricao }>
                    Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha
                </Texto>
                <Texto style={ styleCesta.preco }>R$ 40,00</Texto>
            </View>
        </>
    );
}

const styleCesta = StyleSheet.create({
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
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    nome: {
        color: "#464646",
        fontSize: 26,
        lineHeight: 42,
        fontWeight: "bold",
    },
    fazenda: {
        flexDirection: "row",
        paddingVertical: 12,
    },
    imagemFazenda: {
        width: 32,
        height: 32,
    },
    nomeFazenda: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12,
    },
    descricao: {
        color: "#A3A3A3",
        fontSize: 16,
        lineHeight: 26,
    },
    preco: {
        color: "#2A9F85",
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8
    },
});
