import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  containerHome: {
    flex: 1,
    backgroundColor: '#c9ccd2'
  },

  headerHome: {
    backgroundColor: '#fff',
    padding: 3,
    width: '100%',
    height: 80,
    alignItems: 'center',
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  logoHome: {
    width: 200,
    height: 40
  },

  iconsHeaderHome: {
    flexDirection: 'row',
    width: '40%',
    height: '60%',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },

  singleIcon: {
    marginLeft: 10,
    padding: 10,
    width: 40,
    height: 40,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 20
  },

  iconHeader: {
    width: 20,
    height: 20
  },

  statusHome: {
    width: '100%',
    paddingVertical: 15,
    height: 145,
    marginBottom: 10,
    backgroundColor: '#fff'
  },

  textStatus: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },

  imageProfileStatus: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15
  },

  inputStatus: {
    width: '90%',
    height: 50,
    paddingLeft: 15,
    fontSize: 16
  },

  containerButton: {
    flexDirection: 'row'
  },

  containerIcons: {
    width: '33.3%',
    height: 55,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRightWidth: 1,
    borderRightColor: '#c9ccd2',
    flexDirection: 'row'
  },

  icons: {
    width: 37,
    height: 21,
    marginRight: 5
  },

  iconText: {
    fontWeight: 'bold'
  },

  storyHome: {
    backgroundColor: '#fff',
    paddingLeft: 10,
    paddingVertical: 10,
    marginBottom: 10
  },

  firstStory: {
    width: 160,
    height: 230,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 15
  },

  profileStory: {
    width: '100%',
    height: '70%',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15
  },

  iconAdd: {
    width: 40,
    height: 40,
    position: 'absolute',
    alignSelf: 'center',
    top: '60%',
    borderRadius: 20,
    borderWidth: 3,
    borderColor: '#fff'
  },

  textBoxStory: {
    width: '100%',
    height: 100,
    alignItems: 'center',
    justifyContent: 'center'
  },

  textStory: {
    fontWeight: 'bold'
  },

  containerPost: {
    backgroundColor: '#fff'
  }
})
