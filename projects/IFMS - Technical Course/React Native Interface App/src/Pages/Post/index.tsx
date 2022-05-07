import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
const Post = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.headerPost}>
          <View style={styles.foto}></View>
          <View style={styles.textos}>
            <Text style={styles.textoPost}>My Post</Text>
            <View style={styles.tempoPostagem}>
              <Text>2hrs</Text>
              <Image
                style={styles.imagem}
                source={require("../../assets/globo.png")}
              ></Image>
            </View>
          </View>
        </View>
        <View style={styles.textoPostPublicado}>
          <Text>
            Este é o design que vamos replicar hoje na aula:{" "}
            <Text style={styles.textoPostPublicadoLink}>
              https://mockupsfreebies.com/social-media/facebook/free-facebook-mobile-post-mockup
            </Text>
          </Text>
          <Image
            style={styles.imagemPost}
            source={require("../../assets/post.png")}
          ></Image>
        </View>
        <View style={styles.likes}>
          <Image
            style={styles.likesIcon}
            source={require("../../assets/likes.png")}
          ></Image>
          <Text style={styles.likesTexto}>12</Text>
        </View>

        <View style={styles.linksShare}>
          <TouchableOpacity style={styles.linksShareBloco}>
            <Image
              style={styles.iconShare}
              source={require("../../assets/like.png")}
            ></Image>
            <Text style={styles.likesTexto}>Like</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.linksShareBloco}>
            <Image
              style={styles.iconShare}
              source={require("../../assets/comment.png")}
            ></Image>
            <Text style={styles.likesTexto}>Comment</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.linksShareBloco}>
            <Image
              style={styles.iconShare}
              source={require("../../assets/shareIcon.png")}
            ></Image>
            <Text style={styles.likesTexto}>Share</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.footerPost}>
          <TouchableOpacity style={styles.btnLearMore}>
            <Text style={styles.btnLearMoreText}> Learn More</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnMensagem}>
            <Image
              style={{ width: 16, height: 16 }}
              source={require("../../assets/btnmensagem.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn3Pontos}>
            <Image
              style={{ height: 3, width: 16 }}
              source={require("../../assets/3pontos.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Post;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 15,
  },

  headerPost: {
    flexDirection: "row",
  },

  foto: {
    width: 60,
    height: 60,
    backgroundColor: "#4369B0",
    borderRadius: 50,
  },

  textos: {
    paddingLeft: 20,
    justifyContent: "space-around",
  },

  tempoPostagem: {
    flexDirection: "row",
  },

  textoPost: {
    fontWeight: "bold",
    fontSize: 18,
  },

  imagem: {
    marginLeft: 6,
    alignSelf: "center",
  },

  textoPostPublicado: {
    marginTop: 10,
    fontSize: 18,
  },

  textoPostPublicadoLink: {
    color: "#4D6196",
    fontSize: 14,
  },

  imagemPost: {
    height: 282,
    width: 358,
  },

  likes: {
    marginTop: 20,
    flexDirection: "row",
    alignContent: "center",
  },

  likesIcon: {
    width: 22,
    height: 22,
    marginRight: 5,
  },

  likesTexto: {
    textAlignVertical: "center",
    marginLeft: 10,
  },

  linksShare: {
    flexDirection: "row",
    marginHorizontal: 15,
    marginVertical: 20,
    justifyContent: "space-between",
  },

  linksShareBloco: {
    flexDirection: "row",
  },

  iconShare: {
    width: 18,
    height: 18,
  },

  footerPost: {
    height: 43,
    flexDirection: "row",
  },

  btnLearMore: {
    flex: 8,
    backgroundColor: "#3D7BE2",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },

  btnMensagem: {
    flex: 2,
    marginLeft: 10,
    backgroundColor: "#3D7BE2",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },

  btn3Pontos: {
    flex: 2,
    marginLeft: 10,
    borderWidth: 2,
    borderColor: "#3D7BE2",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },

  btnLearMoreText: {
    color: "#FDF7FD",
    fontSize: 16,
  }
});
