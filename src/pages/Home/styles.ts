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
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#343a40",
    marginBottom: 10,
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
});
