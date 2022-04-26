import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { stylesLink, stylesLinkImportantes, styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import { StackNavigatorParamList } from "../../../types";
import Post from "../Post";

const LinkItem = (props: any) => {
  return <Text style={stylesLink.text}>{props.name}</Text>;
};

const LinksImportantes = () => {
  return (
    <View style={stylesLinkImportantes.container}>
      <LinkItem name="Home" />
      <LinkItem name="Post" />
      <LinkItem name="Videos" />
      <LinkItem name="Photos" />
      <LinkItem name="Community" />
    </View>
  );
};

type HomeProps = NativeStackNavigationProp<StackNavigatorParamList>;

const Home = () => {
  const navigation = useNavigation<HomeProps>();

  function irParaTelaLogin() {
    navigation.navigate("Login");
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("../../assets/arrow-left.png")}></Image>
        <View style={styles.inputTextView}>
          <Image source={require("../../assets/ei_search.png")}></Image>
          <TextInput
            placeholder="Search"
            placeholderTextColor="#F5FFFF"
            style={styles.textInput}
          ></TextInput>
        </View>
        <Image source={require("../../assets/share.png")}></Image>
      </View>
      <LinksImportantes />
      <StatusBar style="auto" />
      <Post />
      {/* <View style={styles.pageContent}>
				<TouchableOpacity style={styles.button} onPress={irParaTelaLogin}>
					<Text style={styles.textBtn}>Ir para a Segunda Tela</Text>
				</TouchableOpacity>
			</View> */}
    </View>
  );
};

export default Home;
