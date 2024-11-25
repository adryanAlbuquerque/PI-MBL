import React from "react";
import './gesture-handler';
import 'react-native-gesture-handler'; 
import { View, StyleSheet } from "react-native";
import Routes from "./src/routes/index.routes";
import {NavigationContainer} from "@react-navigation/native";

import Login from "./src/pages/Login"; 

export default function App() {
  return (

    <NavigationContainer>
      <Routes/>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    justifyContent: "center", // Centraliza o conteúdo no fundo
    alignItems: "center",
  },
});
