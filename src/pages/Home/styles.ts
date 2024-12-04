import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
    justifyContent: "flex-end",
    paddingTop: 270,
  },
  imageBackground: {
    flex: 1,
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  header: {
    paddingHorizontal: 20,
    marginVertical: 10,
    alignItems: "flex-start",
  },
  welcomeText: {
    fontSize: 40, 
    color: "white",
    fontWeight: "bold",
    marginBottom: 60,
    textAlign: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#343a40",
    marginBottom: 10,
  },

  title2: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#343a40",
    marginBottom: 10,
    marginTop: -100,
  },

  subtitle: {
    fontSize: 14,
    color: "#6c757d",
    marginBottom: 10,
  },
  cardsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  card: {
    width: "30%",
    height: 100,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },
  cardBlue: {
    backgroundColor: "#4F20EC",
  },
  cardPink: {
    backgroundColor: "#EC20A6",
  },
  cardGreen: {
    backgroundColor: "#20ECA6",
  },
  
  cardText: {
    color: "#FFF",
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
  },
  newsContainer: {
    paddingHorizontal: 20,
    marginTop: 10,
    alignSelf: "flex-start",
  },
  newsCard: {
    width: 150,
    height: 120,
    marginRight: 10,
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "#FFF",
    padding: 5,
  },
  newsImage: {
    width: "100%",
    height: "70%",
  },
  newsText: {
    fontSize: 12,
    color: "#343a40",
    padding: 5,
    textAlign: "center",
    flexWrap: "wrap",
  },
  spacing: {
    marginBottom: 30,
  },


  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", 
  },
  modalContent: {
    width: "85%",
    backgroundColor: "#FFF",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    elevation: 5, 
    shadowColor: "#000", 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#343a40",
    marginBottom: 15,
  },
  modalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 10,
  },
  modalText: {
    fontSize: 14,
    color: "#343a40",
  },
  modalButton: {
    marginTop: 20,
    backgroundColor: "#4F20EC",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: "center",
  },
  modalButtonText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 14,
  },
});
