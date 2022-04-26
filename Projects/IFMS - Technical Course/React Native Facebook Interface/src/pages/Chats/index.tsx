import React from 'react';
import { Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps
} from '@react-navigation/native-stack';
import { StackNavigatorParamList } from '../../types';
import { renderItemAgenda } from '../../components/ItenChat';

type LoginProps = NativeStackNavigationProp<StackNavigatorParamList>
const Chats = () => {
  const navigation = useNavigation<LoginProps>()

  function goHome() {
    navigation.navigate('Home');
  }

  const dados = [
    {
      id: 1,
      nome: 'César Canoff',
      message: 'Hello.',
      foto: require('../../assets/HomeMedias/images/imageCesar.png')
    },
    {
      id: 2,
      nome: 'Andrielly Amaral',
      message: "Don't worry, be happy.",
      foto: require('../../assets/HomeMedias/images/imageAndrielly.jpeg')
    },
    {
      id: 3,
      nome: 'Mileny Marinho',
      message: 'Always look on the bright side of life.',
      foto: require('../../assets/HomeMedias/images/imageMileny.jpeg')
    },
    {
      id: 4,
      nome: 'Jamily Silva',
      message: 'Just believe in your dreams.',
      foto: require('../../assets/HomeMedias/images/imageJamily.jpeg')
    },
    {
      id: 5,
      nome: 'Will Samps',
      message: 'Life is way too short for bad vibes...',
      foto: require('../../assets/HomeMedias/images/imageMan.jpg')
    },
    {
      id: 6,
      nome: 'César Canoff',
      message: 'Hello.',
      foto: require('../../assets/HomeMedias/images/imageCesar.png')
    },
    {
      id: 7,
      nome: 'Andrielly Amaral',
      message: "Don't worry, be happy.",
      foto: require('../../assets/HomeMedias/images/imageAndrielly.jpeg')
    },
    {
      id: 8,
      nome: 'Mileny Marinho',
      message: 'Always look on the bright side of life.',
      foto: require('../../assets/HomeMedias/images/imageMileny.jpeg')
    },
    {
      id: 9,
      nome: 'Jamily Silva',
      message: 'Just believe in your dreams.',
      foto: require('../../assets/HomeMedias/images/imageJamily.jpeg')
    },
    {
      id: 10,
      nome: 'Will Samps',
      message: 'Life is way too short for bad vibes...',
      foto: require('../../assets/HomeMedias/images/imageMan.jpg')
    },
    {
      id: 11,
      nome: 'César Canoff',
      message: 'Hello.',
      foto: require('../../assets/HomeMedias/images/imageCesar.png')
    },
    {
      id: 12,
      nome: 'Andrielly Amaral',
      message: "Don't worry, be happy.",
      foto: require('../../assets/HomeMedias/images/imageAndrielly.jpeg')
    },
    {
      id: 13,
      nome: 'Mileny Marinho',
      message: 'Always look on the bright side of life.',
      foto: require('../../assets/HomeMedias/images/imageMileny.jpeg')
    },
    {
      id: 14,
      nome: 'Jamily Silva',
      message: 'Just believe in your dreams.',
      foto: require('../../assets/HomeMedias/images/imageJamily.jpeg')
    },
    {
      id: 15,
      nome: 'Will Samps',
      message: 'Life is way too short for bad vibes...',
      foto: require('../../assets/HomeMedias/images/imageMan.jpg')
    },
    {
      id: 16,
      nome: 'César Canoff',
      message: 'Hello.',
      foto: require('../../assets/HomeMedias/images/imageCesar.png')
    },
    {
      id: 17,
      nome: 'Andrielly Amaral',
      message: "Don't worry, be happy.",
      foto: require('../../assets/HomeMedias/images/imageAndrielly.jpeg')
    },
    {
      id: 18,
      nome: 'Mileny Marinho',
      message: 'Always look on the bright side of life.',
      foto: require('../../assets/HomeMedias/images/imageMileny.jpeg')
    },
    {
      id: 19,
      nome: 'Jamily Silva',
      message: 'Just believe in your dreams.',
      foto: require('../../assets/HomeMedias/images/imageJamily.jpeg')
    },
    {
      id: 20,
      nome: 'Will Samps',
      message: 'Life is way too short for bad vibes...',
      foto: require('../../assets/HomeMedias/images/imageMan.jpg')
    }
  ]
  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity onPress={goHome}>
          <Image
            style={styles.iconBack}
            source={require('../../assets/HomeMedias/icons/iconBack.png')}
          ></Image>
        </TouchableOpacity>
        <Text style={styles.containerTitle}>Chat</Text>
      </View>
      <View style={styles.containerView}>
        <FlatList data={dados} renderItem={renderItemAgenda} />
      </View>
    </View>
  )
}

export default Chats;
