import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Inicio from "../pages/Inicio"; // Tela de introdução
import Login from "../pages/Login"; // Tela de login
import BottomRoutes from "./botton.routes"; // Rotas principais

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator
      initialRouteName="Inicio" // Define a tela de introdução como inicial
      screenOptions={{
        headerShown: false, // Remove cabeçalhos das telas
        cardStyle: { backgroundColor: "#FFF" },
      }}
    >
      <Stack.Screen name="Inicio" component={Inicio} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="BottomRoutes" component={BottomRoutes} />
    </Stack.Navigator>
  );
}
