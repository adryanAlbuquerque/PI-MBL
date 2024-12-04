import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import styles from "./styles";

const HorariosScreen = () => {
  // Lista de dias e horários
  const diasDaSemana = ["Seg", "Ter", "Qua", "Qui", "Sex"];
  const horarios = ["08:00 - 09:00", "09:00 - 10:00", "10:00 - 11:00", "11:00 - 12:00", "12:00 - 13:00", "13:00 - 14:00"];

  // Exemplo de matérias (poderiam vir de um estado ou API)
  const materias = {
    "08:00 - 09:00": ["Mate.", "Física", "Bio.", "Quí.", "Geo."],
    "09:00 - 10:00": ["Port.", "Hist.", "Filo.", "Ed. Física", "Inglês"],
    "10:00 - 11:00": ["Mate.", "Quí.", "Geo.", "Port.", "Bio."],
    "11:00 - 12:00": ["Física", "Hist.", "Inglês", "Artes", "Quí."],
    "12:00 - 13:00": ["Filo.", "Ed. Física", "Port.", "Mate.", "Geo."],
    "13:00 - 14:00": ["Artes", "Inglês", "Física", "Quí.", "Bio."]
  };

  const renderHorario = ({ item }) => (
    <View style={styles.row}>
      <Text style={styles.cell}>{item}</Text>
      {diasDaSemana.map((dia, index) => {
        const materia = materias[item][index]; // Associa a matéria ao horário e dia
        return (
          <TouchableOpacity key={index} style={styles.cell}>
            <Text style={styles.cellText}>{materia}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Grade de Horários</Text>
      <View style={styles.table}>
        <View style={styles.headerRow}>
          <Text style={[styles.Hora, { fontWeight: "bold" }]}>Hora</Text>
          {diasDaSemana.map((dia, index) => (
            <Text key={index} style={[styles.cell, { fontWeight: "bold" }]}>
              {dia}
            </Text>
          ))}
        </View>
        <FlatList
          data={horarios}
          renderItem={renderHorario}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
  );
};

export default HorariosScreen;
