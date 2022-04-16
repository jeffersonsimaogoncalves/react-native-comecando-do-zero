import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import topo from '../../assets/topo.png';
import logo from '../../assets/logo.png';

const width = Dimensions.get('screen').width;

export default function Cesta() {
    return (
        <>
            <Image source={ topo } style={ style.imagemTopo } />
            <Text style={ style.titulo }>Detalhe da Cesta</Text>
            <View style={ style.cesta }>
                <Text style={ style.nome }>Cesta de Verduras</Text>
                <View style={ style.fazenda }>
                    <Image source={ logo } style={ style.imagemFazenda } />
                    <Text style={ style.nomeFazenda }>Jenny Jack Farm</Text>
                </View>
                <Text style={ style.descricao }>
                    Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha
                </Text>
                <Text style={ style.preco }>R$ 40,00</Text>
            </View>
        </>
    );
}

const style = StyleSheet.create({
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
        fontFamily: "MontserratBold",
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
        fontFamily: "MontserratRegular",
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
