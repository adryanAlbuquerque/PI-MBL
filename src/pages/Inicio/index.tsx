import React, { useEffect } from "react";
import { View, Image, StyleSheet } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";

type InicioScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Inicio"
>;

type Props = {
  navigation: InicioScreenNavigationProp;
};

export default function Inicio({ navigation }: Props) {
  useEffect(() => {
 
    const timer = setTimeout(() => {
      navigation.replace("Login");
    }, 3000); 

    return () => clearTimeout(timer); 
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/icon.png")} 
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
