import React from "react";
import Texto from "../../../componentes/Texto";
import { Image, StyleSheet, View } from "react-native";

export default function Item({ item: { nome, imagem } }) {
    return (
        <View key={ nome } style={ styleItens.item }>
            <Image source={ imagem } style={ styleItens.itemImagem } />
            <Texto style={ styleItens.itemNome }>{ nome }</Texto>
        </View>
    );
}

const styleItens = StyleSheet.create({
    item: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#ECECEC",
        paddingVertical: 16,
        marginHorizontal: 16,
        alignItems: "center",
    },
    itemImagem: {
        width: 46,
        height: 46,
    },
    itemNome: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 11,
        color: "#464646",
    },
});
