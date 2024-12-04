import React from "react";
import { View, Text, ScrollView, ImageBackground } from "react-native";
import styles from "./styles"; 
import Fundo from "../../assets/background3.jpg"; 

export default function Comunicados() {
  return (
    <ImageBackground source={Fundo} style={styles.imageBackground}>
      <ScrollView contentContainerStyle={styles.container}>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Regularização</Text>
          <Text style={styles.cardBody}>
            São Paulo, 28 de novembro de 2024{"\n\n"}
            Prezados(as) alunos(as),{"\n\n"}
            Informamos que, a partir de 5 de dezembro de 2024, até 3 de dezembro
            de 2024 para regularização.{"\n\n"}
            Dúvidas? Entre em contato pelo e-mail secretaria@escola.com ou pelo
            telefone (11) 1234-5678.{"\n\n"}
            Atenciosamente,{"\n"}
            Coordenação Acadêmica
          </Text>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}
