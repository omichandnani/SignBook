import React, { Component } from "react";
import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import { Appbar } from "react-native-paper";
import * as Permissions from "expo-permissions";
import { Camera } from "expo-camera";

class DetailScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasCameraPermission: null,
      type: Camera.Constants.Type.front,
      classification: null,
      intervalId: null
    };
    this.state.intervalId = setInterval(() => {
      console.log("hello");
      this.snap();
    }, 1000);
  }

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === "granted" });
  }

  componentWillUnmount() {
    if (this.state.intervalId) clearInterval(this.state.intervalId);
  }

  snap = async () => {
    if (this.camera) {
      try {
        let photo = await this.camera.takePictureAsync({
          base64: true
        });
        if (photo.base64) {
          console.log("photo sent");
          console.log("URI", photo.uri);
          this.classifyImage(photo.base64);
        }
      } catch (e) {
        console.log("Error taking picture");
      }
    }
  };

  classifyImage = async img => {
    fetch(
      {
        headers: {
          "Content-Type": "application/octet-stream"
        },
        method: "POST",
        body: img
      }
    )
      .then(response => response.json())
      .then(data => console.log("DATA", data))
      .catch(err => console.log("ERR", err));
  };

  render() {
    const chapter = this.props.navigation.getParam("item");
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={{ height: "100%" }}>
          <View>
            <Appbar.Header>
              <Appbar.Content title={chapter} />
            </Appbar.Header>
          </View>
          <View style={{ height: "100%", width: "100%", alignItems: "center" }}>
            <Camera
              style={{ height: "30%", width: "90%", marginVertical: 20 }}
              type={this.state.type}
              ref={ref => {
                this.camera = ref;
              }}
            ></Camera>
          </View>
        </View>
      );
    }
  }
}

export default DetailScreen;
