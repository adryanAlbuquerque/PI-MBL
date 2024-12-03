import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  imagemDeFundo: {
    flex: 1, 
    resizeMode: "cover", 
    justifyContent: "center",
  },
  caixaSuperior: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: "contain",
  },
  caixaMeio: {
    flex: 3,
    width: "80%",
    justifyContent: "flex-start",
    backgroundColor: "transparent",
    marginTop: 20,
  },
  saudacao: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#4F20EC",
  },
  subtexto: {
    fontSize: 16,
    color: "#6c757d",
    marginBottom: 20,
  },
  etiqueta: {
    fontSize: 14,
    color: "#343a40",
    marginBottom: 5,
  },
  campoTexto: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: "#fff",
  },
  botao: {
    backgroundColor: "#4F20EC",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    width: 200,            
    alignSelf: "center",    
  },
  textoBotao: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    alignSelf: "center",  
  },
  caixaInferior: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: 20,
    backgroundColor: "transparent",
  },
  textoRodape: {
    fontSize: 12,
    color: "#6c757d",
  },
  containerOpcoes: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 20,
  },
  manterLogin: {
    flexDirection: "row",
    alignItems: "center",
  },
  textoManterLogin: {
    fontSize: 14,
    color: "#343a40",
    marginLeft: 10,
  },
  textoEsqueceuSenha: {
    fontSize: 14,
    color: "#4F20EC",
    textDecorationLine: "underline",
  },
});
