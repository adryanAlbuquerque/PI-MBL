import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    paddingTop: 30,
  },
  imageBackground: {
    flex: 1,
    width: "100%", 
    justifyContent: "flex-start",
  },
  header: {
    alignItems: "center", 
    padding: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60, 
    borderWidth: 4,
    borderColor: "#4F20EC", 
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
    backgroundColor: "#fff",
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 10,
    borderWidth: 1,
    borderColor: "#4F20EC",
  },
  modalButtonText: {
    color: "#4F20EC",
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
    backgroundColor: "#fff", 
    paddingVertical: 10,
    paddingHorizontal: 5,
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#4F20EC", 
  },
  scheduleHeaderText: {
    fontSize: 14,
    color: "#4F20EC", 
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
