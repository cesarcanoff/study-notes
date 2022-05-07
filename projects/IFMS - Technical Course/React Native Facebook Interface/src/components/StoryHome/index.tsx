import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from './styles';

const StoryHome = (props: any) => {
  return (
    <TouchableOpacity style={styles.storyIten}>
      <View
        style={{
          backgroundColor: props.color,
          height: '100%',
          borderRadius: 15,
          padding: 10
        }}
      >
        <Image style={styles.imageProfile} source={props.image}></Image>
        <Text style={styles.nameStory}>{props.name}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default StoryHome;
