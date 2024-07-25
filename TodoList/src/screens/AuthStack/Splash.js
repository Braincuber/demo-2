//import liraries
import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { scaleSize } from "../../common/Utils/constant";
import { FONTS } from "../../common/Utils/fonts";
import { COLORS } from "../../common/Utils/Colors";
import { SCREENS } from "../../common/Utils/Screens";
import { useNavigation } from "@react-navigation/native";
/**
 * Splash screen component.
 * This component is displayed while the app is loading.
 * It displays the text "Splash" in the center of the screen.
 */
const Splash = () => {
  const navigation = useNavigation();

  useEffect(() => {
    // Navigate to welcome screen after 3 seconds
    setTimeout(() => {
      navigation.navigate(SCREENS.TodoList);
    }, 1500);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>TO DO LIST</Text>
    </View>
  );
};

// Define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.White,
  },
  text: {
    color: COLORS.Black,
    fontSize: scaleSize(40),
    fontFamily: FONTS.RMedium,
  },
});

//make this component available to the app
export default Splash;
