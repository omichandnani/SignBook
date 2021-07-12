import React from "react";
import { View } from "react-native";
import { Button, Card, Title, Paragraph } from "react-native-paper";

export default ContentCard = props => {
  return (
    <View style={{ padding: 20 }}>
      <Card>
        <Card.Cover source={props.img} />
        <Card.Content>
          <Title>{props.title}</Title>
          {props.content === "" ? (
            <View />
          ) : (
            <Paragraph>{props.content}</Paragraph>
          )}
        </Card.Content>
        <Card.Actions>
          <Button onPress={() => props.btnPressed(props.chapter)}>
            START CHAPTER
          </Button>
        </Card.Actions>
      </Card>
    </View>
  );
};
