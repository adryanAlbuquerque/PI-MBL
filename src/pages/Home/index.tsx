import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, Image, ImageBackground, Modal } from "react-native";
import { styles } from "./styles"; // Importando o estilo
import Fundo from "../../assets/background1.jpg"; // Imagem de fundo

import VagaImage from "../../assets/Vaga.jpg";
import RECnPlayImage from "../../assets/Recnplay.jpg";
import IAImage from "../../assets/IA.jpg";

export default function Home() {
  const [notesModalVisible, setNotesModalVisible] = useState(false);
  const [calendarModalVisible, setCalendarModalVisible] = useState(false);
  const [curriculumModalVisible, setCurriculumModalVisible] = useState(false);

  const openModal = (setModal) => setModal(true);
  const closeModal = (setModal) => setModal(false);

  const notes = [
    { subject: "Matemática", grade: "8.5" },
    { subject: "Português", grade: "7.0" },
    { subject: "História", grade: "9.2" },
    { subject: "Ciências", grade: "8.0" },
    { subject: "Geografia", grade: "7.8" },
  ];

  const calendar = [
    { date: "Matemática", event: "Prof. Ana" },
    { date: "Português", event: "Prof. Carlos" },
    { date: "História", event: "Prof. Júlia" },
    { date: "Ciências", event: "Prof. Ricardo" },
    { date: "Geografia", event: "Prof. Mariana" },
  ];

  const curriculum = [
    { subject: "Matemática", teacher: "Prof. Ana" },
    { subject: "Português", teacher: "Prof. Carlos" },
    { subject: "História", teacher: "Prof. Júlia" },
    { subject: "Ciências", teacher: "Prof. Ricardo" },
    { subject: "Geografia", teacher: "Prof. Mariana" },
  ];

  return (
    <ImageBackground source={Fundo} style={styles.imageBackground}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Cabeçalho */}
        <View style={styles.header}>
          <Text style={styles.title}>Turma:</Text>
        </View>

        {/* Disciplinas */}
        <View style={styles.cardsContainer}>
          <TouchableOpacity style={[styles.card, styles.cardBlue]} onPress={() => openModal(setNotesModalVisible)}>
            <Text style={styles.cardText}>Conceitos</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.card, styles.cardPink]} onPress={() => openModal(setCalendarModalVisible)}>
            <Text style={styles.cardText}>Disciplinas</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.card, styles.cardGreen]} onPress={() => openModal(setCurriculumModalVisible)}>
            <Text style={styles.cardText}>Contatos</Text>
          </TouchableOpacity>
        </View>

        {/* Novidades */}
        <View style={styles.header}>
          <Text style={styles.title}>Novidades</Text>
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

      {/* Modal para Notas */}
      <Modal animationType="slide" transparent={true} visible={notesModalVisible} onRequestClose={() => closeModal(setNotesModalVisible)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Conceitos</Text>
            {notes.map((note, index) => (
              <View key={index} style={styles.modalRow}>
                <Text style={styles.modalText}>{note.subject}</Text>
                <Text style={styles.modalText}>{note.grade}</Text>
              </View>
            ))}
            <TouchableOpacity style={styles.modalButton} onPress={() => closeModal(setNotesModalVisible)}>
              <Text style={styles.modalButtonText}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Modal para Calendário */}
      <Modal animationType="slide" transparent={true} visible={calendarModalVisible} onRequestClose={() => closeModal(setCalendarModalVisible)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Disciplinas</Text>
            {calendar.map((event, index) => (
              <View key={index} style={styles.modalRow}>
                <Text style={styles.modalText}>{event.date}</Text>
                <Text style={styles.modalText}>{event.event}</Text>
              </View>
            ))}
            <TouchableOpacity style={styles.modalButton} onPress={() => closeModal(setCalendarModalVisible)}>
              <Text style={styles.modalButtonText}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Modal para Grade Curricular */}
      <Modal animationType="slide" transparent={true} visible={curriculumModalVisible} onRequestClose={() => closeModal(setCurriculumModalVisible)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Contatos</Text>
            {curriculum.map((item, index) => (
              <View key={index} style={styles.modalRow}>
                <Text style={styles.modalText}>{item.subject}</Text>
                <Text style={styles.modalText}>{item.teacher}</Text>
              </View>
            ))}
            <TouchableOpacity style={styles.modalButton} onPress={() => closeModal(setCurriculumModalVisible)}>
              <Text style={styles.modalButtonText}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ImageBackground>
  );
}
