import React from "react";
import { SafeAreaView, StatusBar } from 'react-native';
import Cesta from "./src/telas/Cesta";
import AppLoading from 'expo-app-loading';
import { Montserrat_400Regular, Montserrat_700Bold, useFonts } from "@expo-google-fonts/montserrat";

export default function App() {
    let [ fontsLoaded ] = useFonts({
        "MontserratRegular": Montserrat_400Regular,
        "MontserratBold": Montserrat_700Bold,
    });

    if ( !fontsLoaded ) {
        return <AppLoading />;
    }

    return (
        <SafeAreaView>
            <StatusBar />
            <Cesta />
        </SafeAreaView>
    );
}
