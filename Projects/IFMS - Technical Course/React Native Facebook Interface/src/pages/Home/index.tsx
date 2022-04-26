import React from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView
} from 'react-native';
import StoryHome from '../../components/StoryHome';
import PostHome from '../../components/PostHome';
import { useNavigation } from '@react-navigation/native';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps
} from '@react-navigation/native-stack';
import { StackNavigatorParamList } from '../../types';
import { styles } from './styles';

type LoginProps = NativeStackNavigationProp<StackNavigatorParamList>

const Home = () => {
  const navigation = useNavigation<LoginProps>()

  function goChats() {
    navigation.navigate('Chats');
  }

  function goMenu() {
    navigation.navigate('Menu');
  }

  return (
    <ScrollView>
      <View style={styles.containerHome}>
        <View style={styles.headerHome}>
          <Image
            style={styles.logoHome}
            source={require('../../assets/HomeMedias/images/logoFacebook.png')}
          ></Image>
          <View style={styles.iconsHeaderHome}>
            <TouchableOpacity style={styles.singleIcon} onPress={goMenu}>
              <Image
                style={styles.iconHeader}
                source={require('../../assets/HomeMedias/icons/iconMenu.png')}
              ></Image>
            </TouchableOpacity>
            <TouchableOpacity style={styles.singleIcon} onPress={goChats}>
              <Image
                style={styles.iconHeader}
                source={require('../../assets/HomeMedias/icons/iconMessenger.png')}
              ></Image>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.statusHome}>
          <View style={styles.textStatus}>
            <Image
              style={styles.imageProfileStatus}
              source={require('../../assets/HomeMedias/images/profile.jpg')}
            ></Image>
            <TextInput
              placeholder="What is on your mind?"
              placeholderTextColor="#545353"
              style={styles.inputStatus}
            ></TextInput>
          </View>
          <View style={styles.containerButton}>
            <TouchableOpacity style={styles.containerIcons}>
              <Image
                style={styles.icons}
                source={require('../../assets/HomeMedias/icons/iconLive.png')}
              ></Image>
              <Text style={styles.iconText}>Live</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.containerIcons}>
              <Image
                style={styles.icons}
                source={require('../../assets/HomeMedias/icons/iconPhotos.png')}
              ></Image>
              <Text style={styles.iconText}>Photos</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.containerIcons}>
              <Image
                style={styles.icons}
                source={require('../../assets/HomeMedias/icons/iconRoom.png')}
              ></Image>
              <Text style={styles.iconText}>Room</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.storyHome}>
          <ScrollView horizontal>
            <TouchableOpacity style={styles.firstStory}>
              <Image
                style={styles.profileStory}
                source={require('../../assets/HomeMedias/images/profile.jpg')}
              ></Image>
              <Image
                style={styles.iconAdd}
                source={require('../../assets/HomeMedias/icons/iconAdd.png')}
              ></Image>
              <View style={styles.textBoxStory}>
                <Text style={styles.textStory}>Create story</Text>
              </View>
            </TouchableOpacity>
            <StoryHome
              image={require('../../assets/HomeMedias/images/imageAndrielly.jpeg')}
              color="#1A1A1A"
              name="Andrielly Amaral"
            />
            <StoryHome
              image={require('../../assets/HomeMedias/images/imageCesar.png')}
              color="#323892"
              name="César Canoff"
            />
            <StoryHome
              image={require('../../assets/HomeMedias/images/imageJamily.jpeg')}
              color="#84308f"
              name="Jamily Silva"
            />
            <StoryHome
              image={require('../../assets/HomeMedias/images/imageMileny.jpeg')}
              color="#246e85"
              name="Mileny Marinho"
            />
          </ScrollView>
        </View>
        <View style={styles.containerPost}>
          <PostHome
            imagePerson={require('../../assets/HomeMedias/images/imageMan.jpg')}
            namePerson="Will Samps"
            timePost={5}
            imagePost={require('../../assets/HomeMedias/images/post1.jpg')}
            coutLikes={275}
          />
          <PostHome
            imagePerson={require('../../assets/HomeMedias/images/imageJamily.jpeg')}
            namePerson="Jamily Silva"
            timePost={1}
            imagePost={require('../../assets/HomeMedias/images/post1.jpg')}
            coutLikes={7.586}
          />
          <PostHome
            imagePerson={require('../../assets/HomeMedias/images/imageMileny.jpeg')}
            namePerson="Mileny Marinho"
            timePost={9}
            imagePost={require('../../assets/HomeMedias/images/post1.jpg')}
            coutLikes={354}
          />
          <PostHome
            imagePerson={require('../../assets/HomeMedias/images/imageAndrielly.jpeg')}
            namePerson="Andrielly Amaral"
            timePost={8}
            imagePost={require('../../assets/HomeMedias/images/post1.jpg')}
            coutLikes={500}
          />
        </View>
      </View>
    </ScrollView>
  )
}

export default Home;
