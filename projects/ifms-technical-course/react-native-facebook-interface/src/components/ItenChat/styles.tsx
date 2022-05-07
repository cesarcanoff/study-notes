import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  containerItem: {
    flexDirection: 'row',
    backgroundColor: 'white',
    marginBottom: 5,
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10
  },
  
  containerItemImagem: {
    height: 50,
    width: 50,
    backgroundColor: 'blue',
    borderRadius: 25,
    marginRight: 20
  },

  name: {
    fontWeight: 'bold',
  },

  message: {
    color: '#696767'
  }
});