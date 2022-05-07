import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from './styles';

const ListMenu = (props: any) => {
  return (
    <TouchableOpacity style={styles.itenList}>
      <View style={styles.singleList}>
        <Image style={styles.icons} source={props.image}></Image>
        <Text style={styles.titleList}>{props.name}</Text>
      </View>
      <Image
        style={styles.iconNext}
        source={require('../../assets/MenuMedias/icons/iconNext.png')}
      ></Image>
    </TouchableOpacity>
  )
}

export default ListMenu;
