import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View, ImageBackground, Image, Modal, TextInput } from "react-native";
import { styles } from "./styles"; 
import profileImage from "../../assets/perfil.jpg"; 
import backgroundImage from '../../assets/backgroundHome.jpg'; 

export default function Profile() {
  const [modalVisible, setModalVisible] = useState(false);
  const [notesModalVisible, setNotesModalVisible] = useState(false);
  const [scheduleModalVisible, setScheduleModalVisible] = useState(false);
  const [subjectsModalVisible, setSubjectsModalVisible] = useState(false);

  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);
  const openNotesModal = () => setNotesModalVisible(true);
  const closeNotesModal = () => setNotesModalVisible(false);
  const openScheduleModal = () => setScheduleModalVisible(true);
  const closeScheduleModal = () => setScheduleModalVisible(false);
  const openSubjectsModal = () => setSubjectsModalVisible(true);
  const closeSubjectsModal = () => setSubjectsModalVisible(false);

  const notes = [
    { subject: "Matemática", grade: "8.5" },
    { subject: "Português", grade: "7.0" },
    { subject: "História", grade: "9.2" },
    { subject: "Ciências", grade: "8.0" },
    { subject: "Geografia", grade: "7.8" },
  ];

  const schedule = [
    { day: "Segunda-feira", time: "08:00 - 10:00", subject: "Matemática" },
    { day: "Segunda-feira", time: "10:15 - 12:15", subject: "Português" },
    { day: "Terça-feira", time: "08:00 - 10:00", subject: "História" },
    { day: "Terça-feira", time: "10:15 - 12:15", subject: "Ciências" },
    { day: "Quarta-feira", time: "08:00 - 10:00", subject: "Geografia" },
    { day: "Quarta-feira", time: "10:15 - 12:15", subject: "Inglês" },
  ];

  const subjects = [
    { name: "Matemática" },
    { name: "Português" },
    { name: "História" },
    { name: "Ciências" },
    { name: "Geografia" },
    { name: "Inglês" },
  ];

  return (
    <ImageBackground source={backgroundImage} style={styles.imageBackground}>
      <ScrollView contentContainerStyle={styles.container}>

        <View style={styles.header}>
          <Image
            source={profileImage} 
            style={styles.profileImage}
          />
          <Text style={styles.name}>Tyler Silva</Text>
          <Text style={styles.username}>Matrícula: 928297</Text>
          <TouchableOpacity style={styles.editButton} onPress={openModal}>
            <Text style={styles.editButtonText}>Alterar Senha</Text>
          </TouchableOpacity>
        </View>


        <View style={styles.optionsContainer}>
          <Text style={styles.sectionTitle}>Minha Conta</Text>

          <TouchableOpacity style={styles.option} onPress={openNotesModal}>
            <Text style={styles.optionText}>Visualizar Notas</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.option} onPress={openScheduleModal}>
            <Text style={styles.optionText}>Consultar Horário</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.option} onPress={openSubjectsModal}>
            <Text style={styles.optionText}>Matérias</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.option}>
            <Text style={styles.optionText}>Sair</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>


      <Modal animationType="slide" transparent={true} visible={modalVisible} onRequestClose={closeModal}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Alterar Senha</Text>
            <TextInput style={styles.input} placeholder="Digite a nova senha" secureTextEntry={true} />
            <TextInput style={styles.input} placeholder="Confirme a nova senha" secureTextEntry={true} />
            <TouchableOpacity style={styles.modalButton} onPress={closeModal}>
              <Text style={styles.modalButtonText}>Salvar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalButton} onPress={closeModal}>
              <Text style={styles.modalButtonText}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>


      <Modal animationType="slide" transparent={true} visible={notesModalVisible} onRequestClose={closeNotesModal}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Minhas Notas</Text>
            {notes.map((note, index) => (
              <View key={index} style={styles.noteContainer}>
                <Text style={styles.noteText}>{note.subject}: {note.grade}</Text>
              </View>
            ))}
            <TouchableOpacity style={styles.modalButton} onPress={closeNotesModal}>
              <Text style={styles.modalButtonText}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>


      <Modal animationType="slide" transparent={true} visible={scheduleModalVisible} onRequestClose={closeScheduleModal}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Horário de Aulas</Text>
            <View style={styles.scheduleTable}>
              <View style={styles.scheduleHeader}>
                <Text style={styles.scheduleHeaderText}>Dia</Text>
                <Text style={styles.scheduleHeaderText}>Horário</Text>
                <Text style={styles.scheduleHeaderText}>Matéria</Text>
              </View>
              {schedule.map((item, index) => (
                <View key={index} style={styles.scheduleRow}>
                  <Text style={styles.scheduleText}>{item.day}</Text>
                  <Text style={styles.scheduleText}>{item.time}</Text>
                  <Text style={styles.scheduleText}>{item.subject}</Text>
                </View>
              ))}
            </View>
            <TouchableOpacity style={styles.modalButton} onPress={closeScheduleModal}>
              <Text style={styles.modalButtonText}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>


      <Modal animationType="slide" transparent={true} visible={subjectsModalVisible} onRequestClose={closeSubjectsModal}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Minhas Matérias</Text>
            {subjects.map((subject, index) => (
              <View key={index} style={styles.subjectContainer}>
                <Text style={styles.subjectText}>{subject.name}</Text>
              </View>
            ))}
            <TouchableOpacity style={styles.modalButton} onPress={closeSubjectsModal}>
              <Text style={styles.modalButtonText}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ImageBackground>
  );
}
