import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  createAppContainer,
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
import ChaptersScreen from "./screens/ChaptersScreen";
import ContentScreen from "./screens/ContentScreen";
import DetailScreen from "./screens/DetailScreen";
import VisualAudioScreen from "./screens/VisualAudioScreen";

const StackNavigator = createStackNavigator(
  {
    ChaptersScreen,
    ContentScreen,
    DetailScreen
  },
  {
    headerMode: "none",
    navigationOptions: {
      headerVisible: false
    }
  }
);

const tab = createBottomTabNavigator({
  Learn: StackNavigator,
  VisualAudio: VisualAudioScreen
});

const AppContainer = createAppContainer(tab);

export default function App() {
  return <AppContainer />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
