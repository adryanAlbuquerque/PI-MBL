import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../pages/Home';
import Perfil from '../pages/Perfil';
import Calendario from '../pages/Calendario';
import Chat from '../pages/Chat';

const Tab = createBottomTabNavigator();

export default function BottomRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false, // Remove o cabeçalho de todas as telas
        tabBarStyle: {
          backgroundColor: '#FFF', // Estilo do fundo da barra de navegação inferior
        },
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Calendario" component={Calendario} />
      <Tab.Screen name="Chat" component={Chat} />
      <Tab.Screen name="Perfil" component={Perfil} />
    </Tab.Navigator>
  );
}
