import React from "react";
import { StyleSheet, Text } from "react-native";

export default function Texto({ children, style }) {
    const styleDefault = ( style?.fontWeight === "bold" ) ? styleTexto.textBold : styleTexto.textRegular;

    return (
        <Text style={ [ style, styleDefault ] }>
            { children }
        </Text>
    );
}

const styleTexto = StyleSheet.create({
    textRegular: {
        fontFamily: "MontserratRegular",
        fontWeight: "normal",
    },
    textBold: {
        fontFamily: "MontserratBold",
        fontWeight: "normal",
    },
});
