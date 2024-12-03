import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Biblioteca de ícones

import Home from '../pages/Home';
import Perfil from '../pages/Perfil';
import Calendario from '../pages/Calendario';
import Comunicados from '../pages/Comunicados';

const Tab = createBottomTabNavigator();

export default function BottomRoutes() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false, // Remove o cabeçalho de todas as telas
        tabBarStyle: {
          backgroundColor: '#FFF', // Estilo do fundo da barra de navegação inferior
        },
        tabBarIcon: ({ color, size }) => {
          let iconName;

          // Escolha o ícone com base na rota
          if (route.name === 'Home') {
            iconName = 'home-outline';
          } else if (route.name === 'Calendario') {
            iconName = 'calendar-outline';
          } else if (route.name === 'Comunicados') {
            iconName = 'chatbox-ellipses-outline';
          } else if (route.name === 'Perfil') {
            iconName = 'person-outline';
          }

          // Retorne o ícone correspondente
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'blue', // Cor do ícone ativo
        tabBarInactiveTintColor: 'gray', // Cor do ícone inativo
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Calendario" component={Calendario} />
      <Tab.Screen name="Comunicados" component={Comunicados} />
      <Tab.Screen name="Perfil" component={Perfil} />
    </Tab.Navigator>
  );
}
