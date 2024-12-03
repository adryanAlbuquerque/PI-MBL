// Calendario.tsx
import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import styles from "./styles"; 

const Calendario = () => {
  const eventos = {
    "2024-12-04": [
      {
        time: "09:00",
        title: "Aula de Matemática",
        description: "Cálculo diferencial e integral.",
        location: "Sala 101",
      },
      {
        time: "14:00",
        title: "Reunião de Pais",
        description: "Discussão sobre o desempenho dos alunos.",
        location: "Auditório Principal",
      },
    ],
    "2024-12-05": [
      {
        time: "10:30",
        title: "Feira de Ciências",
        description: "Apresentação dos projetos dos alunos.",
        location: "Quadra Poliesportiva",
      },
    ],
  };

  const [selectedDate, setSelectedDate] = useState("2024-12-04"); 

  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Text style={styles.title}>Calendário Escolar</Text>
      </View>

      {/* Navegador de Datas */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.dateNavigator}>
        {["2024-12-04", "2024-12-05", "2024-12-06"].map((date) => (
          <TouchableOpacity
            key={date}
            style={[styles.dateButton, date === selectedDate && styles.activeDateButton]}
            onPress={() => setSelectedDate(date)}
          >
            <Text
              style={[styles.dateText, date === selectedDate && styles.activeDateText]}
            >
              {new Date(date).toLocaleDateString("pt-BR", {
                day: "2-digit",
                month: "short",
              })}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Lista de Eventos */}
      <ScrollView style={styles.eventsContainer}>
        {eventos[selectedDate]?.map((evento, index) => (
          <View key={index} style={styles.eventCard}>
            <Text style={styles.eventTime}>{evento.time}</Text>
            <Text style={styles.eventTitle}>{evento.title}</Text>
            <Text style={styles.eventDescription}>{evento.description}</Text>
            <Text style={styles.eventLocation}>{evento.location}</Text>
          </View>
        )) || (
          <Text style={styles.noEventsText}>Nenhum evento programado para este dia.</Text>
        )}
      </ScrollView>
    </View>
  );
};

export default Calendario;
