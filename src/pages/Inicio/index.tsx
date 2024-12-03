import React, { useEffect } from "react";
import { View, Image, StyleSheet } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../navigation/types"; // Importe corretamente o tipo

type InicioScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Inicio"
>;

type Props = {
  navigation: InicioScreenNavigationProp;
};

export default function Inicio({ navigation }: Props) {
  useEffect(() => {
    // Navega para a tela de Login após 3 segundos
    const timer = setTimeout(() => {
      navigation.replace("Login");
    }, 3000); // 3 segundos

    return () => clearTimeout(timer); // Limpa o timer ao desmontar o componente
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/icon.png")} // Caminho para o ícone ou logo
        style={styles.logo}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF", // Cor de fundo branca ou outra cor desejada
  },
  logo: {
    width: 200, // Largura do ícone ou logo
    height: 200, // Altura do ícone ou logo
    resizeMode: "contain", // Ajusta a imagem mantendo a proporção
  },
});
