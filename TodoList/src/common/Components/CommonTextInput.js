import React, { useRef, useImperativeHandle, forwardRef } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Image,
  Dimensions,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { COLORS } from "../Utils/Colors";
import { FONTS } from "../Utils/fonts";


const { height } = Dimensions.get("window");

const CommonTextInput = forwardRef(
  (
    {
      placeholder,
      value,
      onChangeText,
      textInputStyle,
      icon,
      componentStyle,
      isPassword = false,
      onSubmitEditing,
      returnKeyType,
      keyboardType,
      autoCapitalize
    },
    ref
  ) => {
    const textInputRef = useRef(null);

    useImperativeHandle(ref, () => ({
      focus: () => {
        if (textInputRef.current) {
          textInputRef.current.focus();
        }
      },
    }));

    return (
      <View style={componentStyle}>
        <View style={styles.textInputContainer}>
          <Image source={icon} style={styles.iconStyle} resizeMode="contain" />
          <TextInput
            ref={textInputRef}
            style={[styles.textInput, textInputStyle]}
            placeholder={placeholder}
            value={value}
            onChangeText={onChangeText}
            placeholderTextColor={COLORS.Extra_Grey}
            secureTextEntry={isPassword}
            onSubmitEditing={onSubmitEditing}
            returnKeyType={returnKeyType}
            keyboardType={keyboardType}
            autoCapitalize={autoCapitalize}
          />
        </View>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  textInput: {
    flex: 1,
    borderRadius: RFValue(6),
    paddingHorizontal: RFValue(2),
    paddingVertical: RFValue(12, height),
    fontFamily: FONTS.Medium,
    color: COLORS.Black,
    fontSize: RFValue(16, height),
    marginHorizontal: RFValue(4, height),
  },
  textInputContainer: {
    borderWidth: RFValue(1),
    borderColor: COLORS.Grey,
    borderRadius: RFValue(6),
    paddingHorizontal: RFValue(4),
    backgroundColor: COLORS.light_sky,
    flexDirection: "row",
    alignItems: "center",
  },
  textInputHeading: {
    color: COLORS.Black,
    fontFamily: FONTS.Medium,
    fontSize: RFValue(16),
    marginBottom: RFValue(4),
  },
  iconStyle: {
    height: RFValue(16),
    width: RFValue(16),
  },
});

export default CommonTextInput;
