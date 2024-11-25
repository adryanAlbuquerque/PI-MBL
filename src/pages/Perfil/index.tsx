import React from "react";
import { ScrollView, Text, TouchableOpacity, View, ImageBackground, Image } from "react-native";
import { styles } from "./styles"; // Importando o arquivo de estilos
import profileImage from "../../assets/perfil.jpg"; // Renomeado para evitar conflito com o nome do componente

// Imagem de fundo
import backgroundImage from '../../assets/backgroundHome.jpg'; // Importando a imagem de fundo

export default function Profile() {
  return (
    <ImageBackground source={backgroundImage} style={styles.imageBackground}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Cabeçalho com imagem e nome */}
        <View style={styles.header}>
          <Image
            source={profileImage} // Usando a imagem de perfil
            style={styles.profileImage} // Aplica o estilo da borda redonda
          />
          <Text style={styles.name}>Tyler Silva</Text>
          <Text style={styles.username}>@tylerthesilv</Text>
          <TouchableOpacity style={styles.editButton}>
            <Text style={styles.editButtonText}>Editar</Text>
          </TouchableOpacity>
        </View>

        {/* Opções de Conta */}
        <View style={styles.optionsContainer}>
          <Text style={styles.sectionTitle}>Minha Conta</Text>

          <TouchableOpacity style={styles.option}>
            <Text style={styles.optionText}>Alterar senha</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.option}>
            <Text style={styles.optionText}>Validar presença</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.option}>
            <Text style={styles.optionText}>Notificações</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.option}>
            <Text style={styles.optionText}>Chat</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.option}>
            <Text style={styles.optionText}>Consultar histórico de faltas</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}
