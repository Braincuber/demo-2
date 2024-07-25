
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import { scaleSize } from "../../common/Utils/constant";
import { FONTS } from "../../common/Utils/fonts";
import { COLORS } from "../../common/Utils/Colors";
import SideBar from "../../common/Components/SideBar";
import { IMAGE } from "../../common/Utils/image";
import CommonTabBar from "../../common/Components/TabBar";
import Products from "../../common/Components/Products";


const Dashboard = () => {
  const drawerData = [
    {
      id: 1,
      title: "Input",
      image: IMAGE.Inputs,
    },
    {
      id: 2,
      title: "Produce",
      image: IMAGE.Produce,
    },
    {
      id: 3,
      title: "Processed",
      image: IMAGE.Processed,
    },
    {
      id: 4,
      title: "Transport",
      image: IMAGE.Transport,
    },
    {
      id: 5,
      title: "Warehouse",
      image: IMAGE.Warehouse,
    },
    {
      id: 6,
      title: "Finace",
      image: IMAGE.Finance,
    },
    {
      id: 7,
      title: "Insurance",
      image: IMAGE.Insurance,
    },
  ];

  const TabBar = [
    {
      id: 1,
      title: "Products",
    },
    {
      id: 2,
      title: "Services",
    },
  ];

  const Category = [
    {
      title: "Seeds & Samplings",
      CatImage: IMAGE.CatSeeds,
      data: [
        { id: 1, subCategory: "Field crops seeds", image: IMAGE.Fields },
        { id: 2, subCategory: "Vegetable seeds", image: IMAGE.Vegetable },
        { id: 3, subCategory: "Fruits seeds", image: IMAGE.Fruits },
        { id: 4, subCategory: "Leafy Vegetables seeds", image: IMAGE.Leafy },
        { id: 5, subCategory: "Cash Crops Seeds", image: IMAGE.Cashcrop },
        { id: 6, subCategory: "Oil Seeds", image: IMAGE.OilSeed },
        { id: 7, subCategory: "Seed Treatments", image: IMAGE.SeedTreatment },
        {
          id: 8,
          subCategory: "Medicinal & Aromatic Seeds",
          image: IMAGE.Medicinal,
        },
        { id: 9, subCategory: "Saplings", image: IMAGE.Saplings },
        {
          id: 10,
          subCategory: "Plantation & Saplings",
          image: IMAGE.Plantation,
        },
      ],
    },
    {
      title: "Fertilizers",
      CatImage: IMAGE.CatFertilizer,
      data: [
        {
          id: 1,
          subCategory: "Fertilizers Field crops seeds",
          image: IMAGE.Fields,
        },
        {
          id: 2,
          subCategory: "Fertilizers Vegetable seeds",
          image: IMAGE.Vegetable,
        },
        { id: 3, subCategory: "Fertilizers Fruits seeds", image: IMAGE.Fruits },
        { id: 4, subCategory: "Fertilizers Leafy seeds", image: IMAGE.Leafy },
      ],
    },
    {
      title: "Pesticides",
      CatImage: IMAGE.CatPesticides,
      data: [
        {
          id: 1,
          subCategory: "Pesticides Field crops seeds",
          image: IMAGE.Fields,
        },
        {
          id: 2,
          subCategory: "Pesticides Vegetable seeds",
          image: IMAGE.Vegetable,
        },
        { id: 3, subCategory: "Pesticides Fruits seeds", image: IMAGE.Fruits },
        { id: 4, subCategory: "Pesticides Leafy seeds", image: IMAGE.Leafy },
      ],
    },
    {
      title: "Implants",
      CatImage: IMAGE.CatImplant,
      data: [
        {
          id: 1,
          subCategory: "Implants Field crops seeds",
          image: IMAGE.Fields,
        },
        {
          id: 2,
          subCategory: "Implants Vegetable seeds",
          image: IMAGE.Vegetable,
        },
        { id: 3, subCategory: "Implants Fruits seeds", image: IMAGE.Fruits },
        { id: 4, subCategory: "Implants Leafy seeds", image: IMAGE.Leafy },
      ],
    },
    {
      title: "Others",
      CatImage: IMAGE.CatOther,
      data: [
        { id: 1, subCategory: "Field crops seeds", image: IMAGE.Fields },
        { id: 2, subCategory: "Vegetable seeds" },
        { id: 3, subCategory: "Fruits seeds" },
        { id: 4, subCategory: "Leafy seeds" },
      ],
    },
  ];
  const [selectedTab, setSelectedTab] = useState(0);
  
  const [categories, setCategories] = useState(0);
  const [selectedCategory, setSelectedCategory] = React.useState(0);
  
  const [categoryName, setCategoryName] = useState(drawerData[0]?.title);


  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.White} barStyle={"dark-content"} />
      <View style={{ flex: 1, flexDirection: "row" }}>
        <SideBar
          drawerData={drawerData}
          setCategories={(indx) => {setCategories(indx); setCategoryName(drawerData[indx]?.title);}}
          categories={categories}

        />

        <View style={{ flex: 1 }}>
          {
            <View style={styles.TabMaincontainer}>
              <CommonTabBar
                TabBar={TabBar}
                selectedTab={selectedTab}
                setSelectedTab={setSelectedTab}
              />
            </View>
          }
          {0 === selectedTab ? (
            <Products
            categoryName= {categoryName}
              Category={Category}
              setSelectedCategory={setSelectedCategory}
              selectedCategory={selectedCategory}
            />
          ) : (
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={styles.HeaderText}>Services</Text>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.White,
  },
  TabMaincontainer: {
    justifyContent: "space-around",
    flexDirection: "row",
    backgroundColor: COLORS.lightGray_border,
  },
  HeaderText: {
    color: COLORS.Black,
    fontFamily: FONTS.RBold,
    fontSize: scaleSize(16),
  },
  
  CatImage: {
    backgroundColor: COLORS.lightGray_border,
    width: scaleSize(30),
    height: scaleSize(30),
    borderRadius: scaleSize(15),
    marginRight: scaleSize(10),
  },
  
});


export default Dashboard;
