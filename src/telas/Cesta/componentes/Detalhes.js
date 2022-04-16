import React from "react";
import { Image, StyleSheet, View } from "react-native";
import Texto from "../../../componentes/Texto";
import logo from "../../../../assets/logo.png";

export default function Detalhes() {
    return (
        <>
            <Texto style={ styleDetalhes.nome }>Cesta de Verduras</Texto>
            <View style={ styleDetalhes.fazenda }>
                <Image source={ logo } style={ styleDetalhes.imagemFazenda } />
                <Texto style={ styleDetalhes.nomeFazenda }>Jenny Jack Farm</Texto>
            </View>
            <Texto style={ styleDetalhes.descricao }>
                Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha
            </Texto>
            <Texto style={ styleDetalhes.preco }>R$ 40,00</Texto>
        </>
    );
}

const styleDetalhes = StyleSheet.create({
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
