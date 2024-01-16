import React from "react";
import { Text, StyleSheet, View, ImageBackground } from "react-native";

const Card = (props) => {
  const { name, image, bio } = props.user;

  return (
    <View style={styles.card}>
      <ImageBackground
        source={{
          uri: image,
        }}
        style={styles.image}
      >
        <View style={styles.cardInner}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.bio}>{bio}</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "95%",
    height: "70%",
    borderRadius: 10,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  image: {
    width: "100%",
    height: "250%",
    borderRadius: 10,
    overflow: "hidden",

    justifyContent: "flex-end",
  },
  cardInner: {
    padding: 11,
  },
  name: {
    fontSize: 30,
    color: "white",
    fontWeight: "bold",
  },
  bio: {
    fontSize: 18,
    color: "white",
    lineHeight: 25,
  },
});

export default Card;
