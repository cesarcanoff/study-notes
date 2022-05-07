import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  containerPost: {
    width: '100%',
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 10
  },

  headerPost: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20
  },

  halfOnePost: {
    flexDirection: 'row'
  },

  imageProfile: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15
  },

  timePost: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  namePerson: {
    fontSize: 18,
    fontWeight: 'bold'
  },

  iconWorld: {
    width: 15,
    height: 15,
    marginHorizontal: 10
  },

  iconDots: {
    width: 20,
    height: 5
  },

  imagePost: {
    width: '100%',
    height: 300,
    marginBottom: 10
  },

  containerLikes: {
    flexDirection: 'row',
    marginBottom: 10
  },

  coutLikes: {
    width: 25,
    height: 25,
    marginRight: 5
  },

  containerReactions: {
    width: '100%',
    flexDirection: 'row',
    height: 40
  },

  singleAction: {
    width: '33.3%',
    flexDirection: 'row',
    borderWidth: 1,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
    borderColor: '#d8d8d8'
  },

  icons: {
    width: 22,
    height: 21,
    marginRight: 5
  }
})
