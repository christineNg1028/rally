import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Page2 from "./Page2";
import "react-native-gesture-handler";

export default class Home extends React.Component {
  static navigationOptions = {
    title: "ConvertedPage2",
    headerShown: false,
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{ backgroundColor: "#ECEDE8" }}>
        <View style={styles.Newcontainer}>
          <Page2 />
        </View>
        <TouchableOpacity
          onPress={() => navigate("ConvertedPage3")}
          style={styles.nextButton}
        >
          <View style={styles.nextBox}>
            <Text style={styles.next}>NEXT</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigate("ConvertedPage1")}
          style={styles.backButton}
        >
          <View style={styles.backBox}>
            <Text style={styles.back}>BACK</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Newcontainer: {
    width: 420,
    height: 930,
    top: 30,
    flex: 1,
    backgroundColor: "#ECEDE8",
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
  },
  triangle1: {
    height: 300,
    width: 100,
    left: 10,
    top: -100,
    position: "absolute",
    left: 80,
    opacity: 100,
  },
  nextBox: {
    borderWidth: 2,
    borderColor: "#74777A",
    backgroundColor: "#EE8554",
    position: "absolute",
    height: 50,
    width: 85,
  },
  next: {
    fontWeight: "bold",
    color: "#2b2b2b",
    fontSize: 20,
    top: 7,
    left: 12,
  },
  nextButton: {
    position: "absolute",
    top: 760,
    right: 75,
    height: 40,
    width: 70,
  },
  backBox: {
    borderWidth: 2,
    borderColor: "#74777A",
    backgroundColor: "#EE8554",
    position: "absolute",
    height: 50,
    width: 85,
  },
  back: {
    fontWeight: "bold",
    color: "#2b2b2b",
    fontSize: 20,
    top: 7,
    left: 12,
  },
  backButton: {
    position: "absolute",
    top: 760,
    left: 55,
    height: 40,
    width: 70,
  },
});
