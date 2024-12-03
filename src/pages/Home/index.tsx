import React from "react";
import { View, Text, ScrollView, TouchableOpacity, Image, ImageBackground } from "react-native";
import { styles } from "./styles";
import Fundo from "../../assets/background1.jpg"; 
import VagaImage from "../../assets/Vaga.jpg";
import RECnPlayImage from "../../assets/Recnplay.jpg";
import IAImage from "../../assets/IA.jpg";

export default function Home() {
  return (
    <ImageBackground source={Fundo} style={styles.imageBackground}>
      <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
        {/* Cabeçalho */}
        <View style={styles.header}>
          <Text style={styles.welcomeText}>Bem-vindo(a)</Text> 
          <Text style={styles.title}>Portal do Aluno</Text>
          <Text style={styles.subtitle}>Turma: 3 Ano</Text>
        </View>

        {/* Funcionalidades */}
        <View style={styles.cardsContainer}>
          <TouchableOpacity style={[styles.card, styles.cardBlue]}>
            <Text style={styles.cardText}>Horários</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.card, styles.cardPink]}>
            <Text style={styles.cardText}>Disciplinas</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.card, styles.cardGreen]}>
            <Text style={styles.cardText}>Boletim</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.card, styles.cardYellow]}>
            <Text style={styles.cardText}>Pagamento</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.card, styles.cardPurple]}>
            <Text style={styles.cardText}>Perfil</Text>
          </TouchableOpacity>
        </View>

        {/* Novidades */}
        <View style={styles.header}>
          <Text style={styles.title}>Novidades</Text>
          <Text style={styles.subtitle}>1º Período</Text>
          <Text style={styles.subtitle}>Setembro</Text>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.newsContainer}>
          <View style={styles.newsCard}>
            <Image source={VagaImage} style={styles.newsImage} />
            <Text style={styles.newsText}>Vaga Junior - BackEnd</Text>
          </View>
          <View style={styles.newsCard}>
            <Image source={RECnPlayImage} style={styles.newsImage} />
            <Text style={styles.newsText} numberOfLines={2}>
              REC'n'Play - Confira a Programação
            </Text>
          </View>
          <View style={styles.newsCard}>
            <Image source={IAImage} style={styles.newsImage} />
            <Text style={styles.newsText}>Inteligência Artificial na Prática</Text>
          </View>
        </ScrollView>
      </ScrollView>
    </ImageBackground>
  );
}
