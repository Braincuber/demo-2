import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { scaleSize } from '../Utils/constant';
import { COLORS } from '../Utils/Colors';
import { FONTS } from '../Utils/fonts';

const CommonTabBar = ({TabBar,setSelectedTab,selectedTab}) => {
   
  return (
    <View style={styles.TabMaincontainer}>
    {TabBar.map((item,index) => {
      const isSelected = index === selectedTab;
      return (
        <TouchableOpacity
          key={index}
          style={styles.tabBarContainer}
          onPress={() => setSelectedTab(index)}
          activeOpacity={0.7}
        >
          <Text style={[styles.TabText,{fontFamily: isSelected ? FONTS.RBold : FONTS.RRegular}]}>{item.title}</Text>
          {isSelected && (
            <View
              style={{
                width: "150%",
                height: scaleSize(2),
                backgroundColor: COLORS.Black,
                top: scaleSize(10),
                alignSelf: "center",
              }}
            />
          )}
        </TouchableOpacity>
      );
    })}
  </View>
  )
}

export default CommonTabBar

const styles = StyleSheet.create({
    TabMaincontainer: {
        flex:1,
        justifyContent: "space-around",
        flexDirection: "row",
        backgroundColor: COLORS.lightGray_border,
      },
      tabBarContainer: {
        paddingHorizontal: scaleSize(10),
        paddingVertical: scaleSize(10),
      },
      TabText: {
        color: COLORS.Black,
        fontFamily: FONTS.RBold,
        fontSize: scaleSize(16),
      },
})