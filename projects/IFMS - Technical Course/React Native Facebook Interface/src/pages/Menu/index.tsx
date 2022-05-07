import React from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView } from 'react-native';
import ListMenu from '../../components/ListMenu';
import { useNavigation } from '@react-navigation/native';
import {
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import { StackNavigatorParamList } from '../../types';
import { styles } from './styles';

type LoginProps = NativeStackNavigationProp<StackNavigatorParamList>

const Menu = () => {
  const navigation = useNavigation<LoginProps>()
  function goHome() {
    navigation.navigate('Home');
  }

  return (
    <ScrollView>
      <View style={styles.containerPage}>
        <View style={styles.headerPage}>
          <Text style={styles.titlePage}>Menu</Text>
          <Image
            style={styles.iconSearch}
            source={require('../../assets/MenuMedias/icons/iconSearch.png')}
          ></Image>
        </View>

        <TouchableOpacity style={styles.goProfile} onPress={goHome}>
          <View style={styles.contentProfile}>
            <Image
              style={styles.imageProfile}
              source={require('../../assets/MenuMedias/images/profile.jpg')}
            ></Image>
            <View style={styles.textProfile}>
              <Text style={styles.nameProfile}>Annah Sophie</Text>
              <Text style={styles.subtitleProfile}>See your profile</Text>
            </View>
          </View>
          <Image
            style={styles.iconNext}
            source={require('../../assets/MenuMedias/icons/iconNext.png')}
          ></Image>
        </TouchableOpacity>

        <Text style={styles.titleContainer}>GENERAL</Text>
        <ListMenu
          name="Friends"
          image={require('../../assets/MenuMedias/icons/iconFriends.png')}
        />
        <ListMenu
          name="Saved"
          image={require('../../assets/MenuMedias/icons/iconSaved.png')}
        />
        <ListMenu
          name="Memories"
          image={require('../../assets/MenuMedias/icons/iconMemories.png')}
        />
        <ListMenu
          name="Events"
          image={require('../../assets/MenuMedias/icons/iconEvent.png')}
        />
        <ListMenu
          name="Groups"
          image={require('../../assets/MenuMedias/icons/iconGroup.png')}
        />
        <ListMenu
          name="Pages"
          image={require('../../assets/MenuMedias/icons/iconPages.png')}
        />
        <TouchableOpacity>
          <Text style={styles.linkAcess}>See more...</Text>
        </TouchableOpacity>
        <Text style={styles.titleContainer}>SETTINGS & PRIVACITY</Text>
        <ListMenu
          name="Settings"
          image={require('../../assets/MenuMedias/icons/iconSettings.png')}
        />
        <ListMenu
          name="Privacity Shortcut"
          image={require('../../assets/MenuMedias/icons/iconLock.png')}
        />

        <ListMenu
          name="Your time on facebook"
          image={require('../../assets/MenuMedias/icons/iconTime.png')}
        />
        <ListMenu
          name="Language"
          image={require('../../assets/MenuMedias/icons/iconLanguage.png')}
        />
        <ListMenu
          name="Code Generator"
          image={require('../../assets/MenuMedias/icons/iconCodeGenerator.png')}
        />
        <View style={styles.boxLogout}>
          <TouchableOpacity style={styles.buttonLogout}>
            <Text style={styles.textLogout}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
}

export default Menu;
