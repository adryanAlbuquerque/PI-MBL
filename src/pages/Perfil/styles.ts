import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  container: {
    flexGrow: 1,
    padding: 20,
  },
  header: {
    alignItems: "center",
    marginBottom: 30,
    paddingBottom: 20,
    borderBottomWidth: 0, // Removido a borda inferior
    borderBottomColor: "transparent", // Garantir que a cor da borda seja transparente
  },
  profileImage: {
    marginTop: 80,
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 0, // Certifique-se de que não há borda visível
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 10,
  },
  username: {
    fontSize: 16,
    color: "#555",
  },
  editButton: {
    marginTop: 10,
    paddingVertical: 5,
    paddingHorizontal: 20,
    backgroundColor: "#fff", // Cor do botão de edição alterada para branco
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#4F20EC", // Cor da borda alterada para roxo
  },
  editButtonText: {
    color: "#4F20EC", // Cor do texto do botão alterada para roxo
  },
  optionsContainer: {
    marginTop: 30,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    paddingBottom: 10,
  },
  option: {
    marginBottom: 5,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  optionText: {
    fontSize: 16,
    color: "#4F20EC", // Ícones e texto dessa cor roxa
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 10,
    width: "80%",
    borderRadius: 10,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  modalButton: {
    backgroundColor: "#fff", // Cor do botão modal alterada para branco
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 10,
    borderWidth: 1,
    borderColor: "#4F20EC", // Cor da borda alterada para roxo
  },
  modalButtonText: {
    color: "#4F20EC", // Cor do texto do botão modal alterada para roxo
    fontSize: 16,
    textAlign: "center",
  },
  noteContainer: {
    marginBottom: 10,
  },
  noteText: {
    fontSize: 16,
  },
  scheduleTable: {
    width: "100%",
    marginTop: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  scheduleHeader: {
    flexDirection: "row",
    backgroundColor: "#fff", // Cor de fundo alterada para branco
    paddingVertical: 10,
    paddingHorizontal: 5,
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#4F20EC", // Cor da borda alterada para roxo
  },
  scheduleHeaderText: {
    fontSize: 14,
    color: "#4F20EC", // Cor dos textos de cabeçalho alterada para roxo
    fontWeight: "bold",
  },
  scheduleRow: {
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 5,
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  scheduleText: {
    fontSize: 14,
  },
  subjectContainer: {
    marginBottom: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  subjectText: {
    fontSize: 16,
  },
});
