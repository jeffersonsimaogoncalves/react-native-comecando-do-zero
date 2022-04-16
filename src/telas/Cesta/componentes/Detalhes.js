import React from "react";
import { Image, StyleSheet, View } from "react-native";
import Texto from "../../../componentes/Texto";
import Botao from "../../../componentes/Botao";

export default function Detalhes({ nome, logoFazenda, nomeFazenda, descricao, preco, botao }) {
    return (
        <>
            <Texto style={ styleDetalhes.nome }>
                { nome }
            </Texto>
            <View style={ styleDetalhes.fazenda }>
                <Image source={ logoFazenda } style={ styleDetalhes.logoFazenda } />
                <Texto style={ styleDetalhes.nomeFazenda }>
                    { nomeFazenda }
                </Texto>
            </View>
            <Texto style={ styleDetalhes.descricao }>
                { descricao }
            </Texto>
            <Texto style={ styleDetalhes.preco }>
                { preco }
            </Texto>
            <Botao texto={ botao } style={ styleDetalhes.botao } onPress={ () => {
            } } />
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
    logoFazenda: {
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
    botao: {
        marginTop: 16,
    },
});
