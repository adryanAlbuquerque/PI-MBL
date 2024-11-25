import React, { useState } from "react";
import { Text, View, TextInput, TouchableOpacity, Switch, ImageBackground } from "react-native";
import { style } from "./styles";
import Fundo from "../../assets/background1.jpg"; 
import { StackNavigationProp } from '@react-navigation/stack';


type LoginScreenNavigationProp = StackNavigationProp<
  RootStackParamList, 'Login'
>;

type Props = {
  navigation: LoginScreenNavigationProp;
};

export default function Login({ navigation }: Props) { 
  const [manterLogin, setManterLogin] = useState(false);

  const alternarManterLogin = () => setManterLogin(!manterLogin);

  const handleEntrar = () => {

    navigation.navigate("BottomRoutes");
  };

  return (
    <ImageBackground source={Fundo} style={style.imagemDeFundo}>
      <View style={style.container}>
        <View style={style.caixaSuperior}></View>

        <View style={style.caixaMeio}>
          <Text style={style.saudacao}>Olá, Aluno!</Text>
          <Text style={style.subtexto}>Faça login com sua matrícula!</Text>

          <Text style={style.etiqueta}>Matrícula</Text>
          <TextInput
            style={style.campoTexto}
            placeholder="Digite sua matrícula"
            keyboardType="numeric"
          />

          <Text style={style.etiqueta}>Senha</Text>
          <TextInput
            style={style.campoTexto}
            placeholder="Digite sua senha"
            secureTextEntry
          />

          <View style={style.containerOpcoes}>
            <View style={style.manterLogin}>
              <Switch value={manterLogin} onValueChange={alternarManterLogin} />
              <Text style={style.textoManterLogin}>Manter login</Text>
            </View>

            <TouchableOpacity onPress={() => alert("Esqueceu sua senha?")}>
              <Text style={style.textoEsqueceuSenha}>Esqueceu sua senha?</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={style.botao} onPress={handleEntrar}>
            <Text style={style.textoBotao}>Entrar</Text>
          </TouchableOpacity>
        </View>

        <View style={style.caixaInferior}>
          <Text style={style.textoRodape}>© 2024 Senac</Text>
        </View>
      </View>
    </ImageBackground>
  );
}
