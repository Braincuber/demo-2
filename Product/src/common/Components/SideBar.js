import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { COLORS } from "../Utils/Colors";
import { scaleSize } from "../Utils/constant";
import { FONTS } from "../Utils/fonts";

const SideBar = ({ drawerData, setCategories, categories }) => {
  return (
    <View style={styles.subContainer}>
      <Text style={styles.Maintext}>Categories</Text>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: scaleSize(50) }}
      >
        {drawerData?.map((item, index) => {
          const isSelected = index === categories;
          return (
            <TouchableOpacity
              style={styles.MenuContainer}
              key={item.id}
              activeOpacity={0.7}
              onPress={() => setCategories(index)}
            >
              <View style={styles.MenuComponent}>
                <View
                  style={[
                    styles.ImageContainer,
                    {
                      borderColor: isSelected
                        ? COLORS.Black
                        : COLORS.lightGray_border,
                      borderWidth: isSelected ? 1 : 0,
                    },
                  ]}
                >
                  <Image
                    source={item.image}
                    style={styles.image}
                    resizeMode="contain"
                  />
                </View>
                <Text style={styles.MenuText}>{item.title}</Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default SideBar;

const styles = StyleSheet.create({
  Maintext: {
    color: COLORS.Black,
    fontSize: scaleSize(16),
    fontFamily: FONTS.Bold,
    textAlign: "center",
    marginVertical: scaleSize(6),
  },

  subContainer: {
    borderRightWidth: 0.2,
    alignItems: "center",
    paddingHorizontal: scaleSize(14),
  },
  MenuContainer: {},
  MenuComponent: {
    marginVertical: scaleSize(8),
    alignItems: "center",
  },
  ImageContainer: {
    width: scaleSize(70),
    height: scaleSize(70),
    backgroundColor: COLORS.lightGray_border,
    borderRadius: scaleSize(40),
    justifyContent: "center",
    alignItems: "center",
  },

  image: {
    height: scaleSize(40),
    width: scaleSize(40),
  },
  MenuText: {
    color: COLORS.Black,
    fontSize: scaleSize(14),
    fontFamily: FONTS.RMedium,
    textAlign: "center",
  },
});
