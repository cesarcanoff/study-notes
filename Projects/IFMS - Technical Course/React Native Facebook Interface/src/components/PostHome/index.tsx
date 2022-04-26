import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from './styles';

const PostHome = (props: any) => {
  return (
    <View style={styles.containerPost}>
      <View style={styles.headerPost}>
        <TouchableOpacity style={styles.halfOnePost}>
          <Image style={styles.imageProfile} source={props.imagePerson}></Image>
          <View>
            <Text style={styles.namePerson}>{props.namePerson}</Text>
            <View style={styles.timePost}>
              <Text>{props.timePost}h</Text>
              <Image
                style={styles.iconWorld}
                source={require('../../assets/HomeMedias/icons/iconWorld.png')}
              ></Image>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.iconDots}
            source={require('../../assets/HomeMedias/icons/iconDots.png')}
          ></Image>
        </TouchableOpacity>
      </View>
      <TouchableOpacity>
        <Image style={styles.imagePost} source={props.imagePost}></Image>
      </TouchableOpacity>
      <View style={styles.containerLikes}>
        <Image
          style={styles.coutLikes}
          source={require('../../assets/HomeMedias/icons/iconLikes.png')}
        ></Image>
        <Text>{props.coutLikes}</Text>
      </View>
      <View style={styles.containerReactions}>
        <TouchableOpacity style={styles.singleAction}>
          <Image
            style={styles.icons}
            source={require('../../assets/HomeMedias/icons/iconLike.png')}
          ></Image>
          <Text>Like</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.singleAction}>
          <Image
            style={styles.icons}
            source={require('../../assets/HomeMedias/icons/iconComment.png')}
          ></Image>
          <Text>Comments</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.singleAction}>
          <Image
            style={styles.icons}
            source={require('../../assets/HomeMedias/icons/iconShare.png')}
          ></Image>
          <Text>Share</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default PostHome;
