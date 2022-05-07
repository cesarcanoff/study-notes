import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackNavigatorParamList } from '../../../types';

type LoginProps = NativeStackNavigationProp<StackNavigatorParamList>;

const Login = () => {

	const navigation = useNavigation<LoginProps>();

	function irParaTelaHome() {
		navigation.navigate('Home');
	}

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Image style={styles.logo} source={require("../../assets/facebook.png")}></Image>
				<Text style={styles.textLogo}>Facebook</Text>
			</View>
			<View style={styles.form}>
				<TextInput
					placeholder="E-mail"
					placeholderTextColor="#A19FA1"
					style={styles.Input}>
				</TextInput>
				<TextInput
					placeholder="Password"
					placeholderTextColor="#A19FA1"
					style={styles.Input}>
				</TextInput>
				<View style={styles.button}>
					<TouchableOpacity style={styles.button} onPress={irParaTelaHome}>
						<Text style={styles.textButton}>Log-In</Text>
					</TouchableOpacity>
				</View>
				<Text style={styles.signUp}>Sign-Up for Facebook</Text>
			</View>
		</View>
	);
}

export default Login;