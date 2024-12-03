import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
    justifyContent: "flex-start",
    paddingTop: 40, // Ajustado para um padding mais equilibrado
  },
  imageBackground: {
    flex: 1,
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  header: {
    paddingHorizontal: 30,
    marginVertical: 40, // Aumentei a margem para dar mais espaço
    alignItems: "flex-start",
  },
  welcomeText: {
    fontSize: 40, // Adicionado para o texto de "Bem-vindo(a)"
    color: "white",
    fontWeight: "bold",
    marginBottom: 60,
    textAlign: "center",
  },
  title: {
    fontSize: 24, // Tamanho de fonte maior para o título
    fontWeight: "bold",
    color: "#343a40",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18, // Tamanho de fonte maior para o subtítulo
    color: "#6c757d",
    marginBottom: 20, // Mais espaço abaixo do subtítulo
  },
  cardsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly", // Distribuindo os cards de maneira mais uniforme
    paddingHorizontal: 20,
    marginBottom: 40, // Mais espaço entre os cards e o conteúdo abaixo
  },
  card: {
    width: "45%", // Aumentei a largura para dar mais espaço aos cards
    height: 130,  // Tamanho do card ajustado
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
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
  cardYellow: {
    backgroundColor: "#F4A261",
  },
  cardPurple: {
    backgroundColor: "#9B59B6",
  },
  cardText: {
    color: "#FFF",
    fontSize: 18, // Tamanho de fonte aumentado para maior legibilidade
    fontWeight: "bold",
    textAlign: "center",
  },
  newsContainer: {
    paddingHorizontal: 20,
    marginTop: 30, // Mais espaço acima das novidades
    alignSelf: "flex-start",
  },
  newsCard: {
    width: 160, // Aumentei a largura dos cards de notícia
    height: 130,
    marginRight: 15, // Aumentei o espaço entre os cards de notícia
    borderRadius: 12, // Arredondando um pouco mais os cantos
    overflow: "hidden",
    backgroundColor: "#FFF",
    padding: 5,
  },
  newsImage: {
    width: "100%",
    height: "70%", // Ajustando para uma proporção mais agradável
  },
  newsText: {
    fontSize: 16, // Aumentei o tamanho da fonte para as notícias
    color: "#343a40",
    padding: 5,
    textAlign: "center",
    flexWrap: "wrap",
  },
  spacing: {
    marginBottom: 25, // Mais espaço no final
  },
});
