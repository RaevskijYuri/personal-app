import React, { useContext } from "react";
import {
  StyleSheet,
  ImageBackground,
  Dimensions,
  Image,
  View,
} from "react-native";
import { AppLink } from "../components/ui/AppLink";
import { Entypo } from "@expo/vector-icons";

import { THEME } from "../theme";
import { AppTextSemiBold } from "../components/ui/AppTextSemiBold";
import { AppTextBold } from "../components/ui/AppTextBold";
import { BottomNavbar } from "../components/BottomNavbar";
import { ContentList } from "../components/СontentList";
import { DataContext } from "../context/data/DataContext";

export const ContentScreen = ({ navigation }) => {
  const data = useContext(DataContext);
  return (
    <ImageBackground
      source={require("../image/bg-white.png")}
      style={styles.background}
    >
      <AppLink
        style={styles.navLink}
        onPress={() => navigation.navigate("WelcomeScreen")}
      >
        <Entypo name="chevron-thin-left" size={18} color={THEME.GRAY_COLOR} />
        <AppTextSemiBold style={styles.navText}>Назад</AppTextSemiBold>
      </AppLink>
      <AppLink onPress={() => navigation.navigate("SearchScreen")}>
        <Image
          style={styles.searchIcon}
          source={require("../image/icon-search.png")}
        />
      </AppLink>
      <View style={styles.container}>
        <AppTextBold style={styles.title}>Эксклюзивный контент</AppTextBold>
        <ContentList data={data} />
      </View>
      <BottomNavbar />
    </ImageBackground>
  );
};

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  background: {
    width: "100%",
    height: "100%",
  },
  container: {
    width: "100%",
    paddingTop: height / 10,
  },
  navLink: {
    width: "35%",
    top: 60,
    left: 23,
    flexDirection: "row",
    alignItems: "center",
  },
  navText: {
    color: THEME.GRAY_COLOR,
    fontSize: 15,
    marginLeft: 7,
  },
  title: {
    textAlign: "center",
    color: THEME.BLACK_COLOR,
    fontSize: 25,
    marginBottom: height / 20,
  },
  searchIcon: {
    width: 18,
    height: 18,
    top: 43,
    left: width * 0.88,
  },
});
