import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4",
    padding: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    marginTop: 30,
    color: "#343a40",

  },
  table: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    overflow: "hidden",

  },
  headerRow: {
    flexDirection: "row",
    backgroundColor: "#4F20EC",
    paddingVertical: 10,
    paddingHorizontal: 3,
    justifyContent: "space-between",
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  cell: {
    flex: 1,
    textAlign: "center",
    fontSize: 15,
    padding: 5,
  },

  Hora: {
    flex: 1,
    textAlign: "center",
    fontSize: 14,
    padding: 5,
  },

  cellText: {
    fontSize: 14,
    color: "#6c757d",
  },
});

export default styles;
