import React, { Component } from "react";
import { View, ScrollView } from "react-native";
import { Appbar } from "react-native-paper";

class ChaptersScreen extends Component {
  render() {
    return (
      <View>
        <Appbar.Header>
          <Appbar.Content title="Visual Audio" />
        </Appbar.Header>
        <ScrollView style={{ height: "100%" }}></ScrollView>
      </View>
    );
  }
}

export default ChaptersScreen;
