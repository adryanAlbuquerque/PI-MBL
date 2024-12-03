// styles.ts
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 16,
  },
  header: {
    marginTop: 22,
    marginBottom: 16,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  dateNavigator: {
    marginBottom: 20,
  },
  dateButton: {
    padding: 8,
    marginHorizontal: 10,
    backgroundColor: "#ddd",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    height: 40,
  },
  activeDateButton: {
    backgroundColor: "#007bff",
  },
  dateText: {
    fontSize: 16,
    color: "#333",
  },
  activeDateText: {
    color: "#fff",
  },
  eventsContainer: {
    flex: 1,
    marginTop: 10, // Ajuste aqui para subir a lista de eventos
  },
  eventCard: {
    backgroundColor: "#fff",
    padding: 12,
    marginBottom: 8, // Reduzir a distância entre os cards de evento
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 1,
  },
  eventTime: {
    fontSize: 14,
    color: "#555",
    marginBottom: 4,
  },
  eventTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  eventDescription: {
    fontSize: 14,
    color: "#777",
    marginVertical: 4,
  },
  eventLocation: {
    fontSize: 14,
    color: "#555",
  },
  noEventsText: {
    fontSize: 16,
    color: "#888",
    textAlign: "center",
    marginTop: 1,
  },
});

export default styles;
