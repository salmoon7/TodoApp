import { View, Text, StyleSheet } from "react-native";
import Color from "../Color";

function Header() {
  return (
    <View style={styles.headerView}>
      <Text style={styles.headerText}>Task Manager</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  headerView: {
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.lightpurple,
  },
  headerText: {
    marginTop: 10,
    fontWeight: "bold",
    fontSize: 25,
    color: Color.white,
  },
});

export default Header;
