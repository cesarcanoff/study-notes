import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { styles } from './styles';

export const renderItemAgenda = ({ item }) => (
  <TouchableOpacity style={styles.containerItem}>
    <Image style={styles.containerItemImagem} source={item.foto} />
    <View>
      <Text style={styles.name}>{item.nome}</Text>
      <Text style={styles.message}>{item.message}</Text>
      <Text>{item.email}</Text>
    </View>
  </TouchableOpacity>
)
