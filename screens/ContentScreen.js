import React, { Component } from "react";
import { View, ScrollView } from "react-native";
import { Appbar } from "react-native-paper";
import ContentCard from "../components/ContentCard";

const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const alphabetImages = {
  A: require("../assets/alphabets/A.png"),
  B: require("../assets/alphabets/B.png"),
  C: require("../assets/alphabets/C.png"),
  D: require("../assets/alphabets/D.png"),
  E: require("../assets/alphabets/E.png"),
  F: require("../assets/alphabets/F.png"),
  G: require("../assets/alphabets/G.png"),
  H: require("../assets/alphabets/H.png"),
  I: require("../assets/alphabets/I.png"),
  J: require("../assets/alphabets/J.png"),
  K: require("../assets/alphabets/K.png"),
  L: require("../assets/alphabets/L.png"),
  M: require("../assets/alphabets/M.png"),
  N: require("../assets/alphabets/N.png"),
  O: require("../assets/alphabets/O.png"),
  P: require("../assets/alphabets/P.png"),
  Q: require("../assets/alphabets/Q.png"),
  R: require("../assets/alphabets/R.png"),
  S: require("../assets/alphabets/S.png"),
  T: require("../assets/alphabets/T.png"),
  U: require("../assets/alphabets/U.png"),
  V: require("../assets/alphabets/V.png"),
  W: require("../assets/alphabets/W.png"),
  X: require("../assets/alphabets/X.png"),
  Y: require("../assets/alphabets/Y.png"),
  Z: require("../assets/alphabets/Z.png")
};

class ContentScreen extends Component {
  goToDetail = item => {
    this.props.navigation.navigate("DetailScreen", { item });
  };
  render() {
    const chapter = this.props.navigation.getParam("chapter");
    let items = [];
    if (chapter === "Alphabets") {
      items = alphabets.split("");
    }
    return (
      <View>
        <Appbar.Header>
          <Appbar.Content title={chapter} />
        </Appbar.Header>
        <ScrollView style={{ height: "100%" }}>
          {items.map(item => (
            <ContentCard
              key={item}
              title={item}
              content=""
              btnPressed={this.goToDetail}
              chapter={item}
              img={alphabetImages[item]}
            />
          ))}
        </ScrollView>
      </View>
    );
  }
}

export default ContentScreen;
