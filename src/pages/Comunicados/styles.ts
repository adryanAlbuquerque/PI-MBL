import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    resizeMode: "cover", 
  },
  container: {
    padding: 20,
    marginTop:40,
  },
  header: {
    paddingVertical: 20,
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", 
    borderRadius: 10,
    marginBottom: 20,
  },
  headerText: {
    color: "#FFF",
    fontSize: 24,
    fontWeight: "bold",
  },
  card: {
    backgroundColor: "rgba(255, 255, 255, 0.9)", 
    borderRadius: 10,
    padding: 20,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#4B0082", 
    marginBottom: 10,
  },
  cardBody: {
    fontSize: 14,
    color: "#333",
    lineHeight: 22,
  },
});

export default styles;
