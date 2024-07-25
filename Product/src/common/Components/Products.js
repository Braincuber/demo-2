import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import CommonTextInput from "./CommonTextInput";
import { scaleSize } from "../Utils/constant";
import { COLORS } from "../Utils/Colors";
import { FONTS } from "../Utils/fonts";
import { IMAGE } from "../Utils/image";

const Products = ({
  Category,
  selectedCategory,
  setSelectedCategory,
  categoryName,
}) => {
  const [collapse, setCollapse] = useState(-1);
  const [search, setSearch] = React.useState("");
  const [searchData, setSearchData] = React.useState(Category);

  const handleSearch = (text) => {
    setSearch(text);

    if (text === "") {
      setSearchData(Category);
      return;
    }

    const filteredData = Category.reduce((acc, item) => {
      const filteredItems = item.data.filter((i) =>
        i.subCategory.toLowerCase().includes(text.toLowerCase())
      );

      if (filteredItems.length > 0) {
        acc.push({ ...item, data: filteredItems });
      }

      return acc;
    }, []);

    setSearchData(filteredData);
    console.log("filteredData:", JSON.stringify(filteredData));
  };

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          padding: scaleSize(10),
        }}
      >
        <CommonTextInput
          value={search}
          textInputStyle={{ borderwidth: 1 }}
          icon={IMAGE.Search}
          placeholder={"Enter keyword and search..."}
          onChangeText={(e) => handleSearch(e)}
        />
      </View>
      <View style={styles.HeaderView}>
        <Text style={styles.HeaderText}>{categoryName} Store</Text>
        <Image
          source={IMAGE.RightArrow}
          style={{ width: scaleSize(16), height: scaleSize(16) }}
          resizeMode="contain"
        />
      </View>
      <Text style={styles.categoryText}>Select Category</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        {searchData.map((item, index) => {
          const isItemSelected = index == collapse || search.length > 0;
          console.log("isItemSelected", isItemSelected);
          return (
            <>
              <TouchableOpacity
                style={[
                  styles.CollapseContainerStyle,
                  { borderBottomWidth: 1 },
                ]}
                onPress={() => {
                  console.log("selectedCategory", item);
                  setCollapse(isItemSelected ? -1 : index);
                  setSelectedCategory(index);
                }}
                activeOpacity={0.7}
              >
                <View style={styles.CollapseStyle}>
                  <Image source={item.CatImage} style={styles.CatImage} />
                  <Text style={styles.CatTitleText}>{item.title}</Text>
                </View>
                <Image
                  source={isItemSelected ? IMAGE.Up : IMAGE.Down}
                  style={styles.ArrowStyle}
                  resizeMode="contain"
                />
              </TouchableOpacity>
              {isItemSelected && (
                <View
                  style={[styles.CollapseStyle, { padding: scaleSize(10) }]}
                >
                  <Text style={styles.HeadTitle}>{item.title} Store</Text>
                  <Image
                    source={IMAGE.RightArrow}
                    style={styles.ArrowStyle}
                    resizeMode="contain"
                    opacity={0.7}
                  />
                </View>
              )}
              {isItemSelected &&
                selectedCategory == index &&
                item.data.map((item, index) => {
                  return (
                    <View style={styles.CatListStyle} key={index}>
                      <View style={styles.CatListStyle}>
                        <Image
                          source={item.image}
                          resizeMode="contain"
                          style={styles.CatImage}
                        />
                        <Text style={styles.CatText}>{item.subCategory}</Text>
                      </View>
                      <Image
                        source={IMAGE.RightArrow}
                        style={styles.ArrowStyle}
                        resizeMode="contain"
                        opacity={0.3}
                      />
                    </View>
                  );
                })}
            </>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Products;

const styles = StyleSheet.create({
  HeaderView: {
    padding: scaleSize(10),
    borderWidth: 1,
    borderColor: COLORS.Grey,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  HeaderText: {
    color: COLORS.Black,
    fontFamily: FONTS.RBold,
    fontSize: scaleSize(16),
  },
  categoryText: {
    color: COLORS.TextGrey,
    fontFamily: FONTS.RBold,
    fontSize: scaleSize(14),
    padding: scaleSize(10),
  },
  CatImage: {
    backgroundColor: COLORS.lightGray_border,
    width: scaleSize(30),
    height: scaleSize(30),
    borderRadius: scaleSize(15),
    marginRight: scaleSize(10),
  },
  CatTitleText: {
    color: COLORS.Black,
    fontFamily: FONTS.RBold,
    fontSize: scaleSize(18),
  },
  CatText: {
    color: COLORS.Black,
    fontFamily: FONTS.RBold,
    fontSize: scaleSize(14),
  },
  HeadTitle: {
    color: COLORS.Black,
    fontFamily: FONTS.RBold,
    fontSize: scaleSize(15),
  },
  CollapseContainerStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    padding: scaleSize(10),
    borderBottomColor: COLORS.lightGray_border,
  },
  CollapseStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  ArrowStyle: {
    width: scaleSize(16),
    height: scaleSize(16),
    marginLeft: scaleSize(10),
  },
  CatListStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: scaleSize(6),
  },
});
