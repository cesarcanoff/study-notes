import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    padding: 8
  },

  containerView: {
    flex: 1,
    backgroundColor: '#2582EF'
  },

  containerTitle: {
    fontSize: 26,
    paddingVertical: 15,
    textAlign: 'center',
    color: '#2582EF',
    fontWeight: 'bold'
  },

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

  iconBack: {
    width: 30,
    height: 30
  }
})
