import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';
export const styles = StyleSheet.create({
  containerPage: {
    flex: 1,
    marginBottom: 30
  },

  headerPage: {
    width: '100%',
    height: '5%',
    marginTop: Constants.statusBarHeight,
    paddingHorizontal: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 30
  },

  titlePage: {
    fontSize: 20,
    fontWeight: 'bold'
  },

  iconSearch: {
    width: 20,
    height: 20
  },

  goProfile: {
    padding: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20
  },

  contentProfile: {
    flexDirection: 'row'
  },

  imageProfile: {
    width: 70,
    height: 70,
    borderRadius: 35
  },

  textProfile: {
    padding: 5,
    marginLeft: 15,
    justifyContent: 'center'
  },

  nameProfile: {
    fontSize: 18,
    fontWeight: 'bold'
  },

  subtitleProfile: {
    fontWeight: '700',
    color: '#656567'
  },

  iconNext: {
    width: 10,
    height: 10
  },

  titleContainer: {
    color: '#545353',
    fontWeight: 'bold',
    marginLeft: 25
  },

  linkAcess: {
    marginTop: 15,
    color: '#2582EF',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 25,
    marginBottom: 25
  },

  boxLogout: {
    marginHorizontal: 25,
    height: 50,
    justifyContent: 'center'
  },

  buttonLogout: {
    alignItems: 'center'
  },

  textLogout: {
    textAlign: 'center',
    width: '50%',
    color: '#2582EF',
    fontWeight: 'bold',
    fontSize: 18
  }
})
