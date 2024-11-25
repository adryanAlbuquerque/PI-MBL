import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    paddingTop: 30,
  },
  imageBackground: {
    flex: 1,
    width: "100%", // Faz o fundo cobrir toda a largura da tela
    justifyContent: "flex-start",
  },
  header: {
    alignItems: "center", // Centraliza o conteúdo no cabeçalho
    padding: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60, // Faz a borda redonda
    borderWidth: 4, // Adiciona uma borda
    borderColor: "#4F20EC", // Cor da borda
    marginBottom: 10,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  username: {
    fontSize: 14,
    color: "#777",
    marginBottom: 15,
  },
  editButton: {
    backgroundColor: "#4F20EC",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginBottom: 20,
  },
  editButtonText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 16,
  },
  optionsContainer: {
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#343a40",
  },
  option: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  optionText: {
    fontSize: 16,
    color: "#343a40",
  },
});
