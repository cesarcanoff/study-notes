import { StyleSheet } from "react-native";
export const stylesLink = StyleSheet.create({
  text: {
    marginTop: 10,
    color: "#4A4A4C",
    fontSize: 13.71,
  },
});

export const stylesLinkImportantes = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderBottomWidth: 1,
  },
});

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    minHeight: 93,
    backgroundColor: "#4369B0",
    paddingTop: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 30,
  },

  inputTextView: {
    flex: 1,
    backgroundColor: "#2C4877",
    height: 40,
    marginHorizontal: 10,
    alignItems: "center",
    borderRadius: 28,
    paddingLeft: 10,
    flexDirection: "row",
  },

  textInput: {
    color: "#F5FFFF",
    flex: 1,
    paddingRight: 10,
  },

  button: {
    backgroundColor: "#4369B0",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 40,
    borderRadius: 25,
  },

  pageContent: {
    flex: 1,
    justifyContent: "flex-end",
    paddingVertical: 40,
  },

  textBtn: {
    color: "#F5FFFF",
    fontSize: 18,
  },
});
