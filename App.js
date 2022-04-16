import React from "react";
import { SafeAreaView, StatusBar } from 'react-native';
import AppLoading from 'expo-app-loading';
import { Montserrat_400Regular, Montserrat_700Bold, useFonts } from "@expo-google-fonts/montserrat";
import Cesta from "./src/telas/Cesta";
import mock from "./src/mocks/cesta";

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
            <Cesta { ...mock } />
        </SafeAreaView>
    );
}
