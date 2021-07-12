import React, { Component } from "react";
import { View, ScrollView } from "react-native";
import { Appbar } from "react-native-paper";
import ContentCard from "../components/ContentCard";

class ChaptersScreen extends Component {
  goToContent = chapter => {
    this.props.navigation.navigate("ContentScreen", {
      chapter
    });
  };

  render() {
    return (
      <View>
        <Appbar.Header>
          <Appbar.Content title="Chapters" />
        </Appbar.Header>
        <ScrollView style={{ height: "100%" }}>
          <ContentCard
            title="Alphabets"
            content="Learn ASL alphabets"
            btnPressed={this.goToContent}
            chapter="Alphabets"
            img={require("../assets/alphabets.png")}
          />
          <ContentCard
            title="Words"
            content="Learn to spell words"
            btnPressed={this.goToContent}
            chapter="Words"
            img={require("../assets/alphabets.png")}
          />
        </ScrollView>
      </View>
    );
  }
}

export default ChaptersScreen;
