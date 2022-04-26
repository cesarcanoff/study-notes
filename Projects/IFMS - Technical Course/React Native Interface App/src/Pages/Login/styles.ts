import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#395185",
    alignItems: "center",
    height: "100%",
  },

  header: {
    height: 100,
    marginTop: 180,
    justifyContent: "space-evenly",
    flexDirection: "row",
  },

  background: {
    backgroundColor: "#395185",
  },

  logo: {
    height: 40,
    padding: 30,
    width: 60,
  },

  textLogo: {
    color: "#fff",
    fontSize: 50,
    fontFamily: "Roboto",
    fontWeight: "bold",
    marginLeft: 10,
  },

  Input: {
    backgroundColor: "#fff",
    marginVertical: 20,
    width: "80%",
    height: 40,
    paddingLeft: 15,
  },

  form: {
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
  },

  button: {
    backgroundColor: "#213873",
    width: "80%",
    height: 48,
    justifyContent: "center",
    alignItems: "center",
  },

  textButton: {
    color: "#fff",
    fontSize: 25,
    fontWeight: "bold",
  },

  signUp: {
    color: "#fff",
    fontSize: 16,
    marginVertical: 25,
    textDecorationLine: "underline",
  },
});
