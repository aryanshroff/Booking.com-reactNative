import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';


const primary_color="#1556ba";

const HeaderComp = () => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.pressable}>
        <FontAwesome name="bed" size={24} color="white" />
        <Text style={styles.text}>Staying</Text>
      </Pressable>

      <Pressable style={styles.pressableother}>
      <MaterialIcons name="flight" size={24} color="white" />
        <Text style={styles.text}>Flights</Text>
      </Pressable>

      <Pressable style={styles.pressableother}>
      <AntDesign name="car" size={24} color="white" />
        <Text style={styles.text}>Car Rental</Text>
      </Pressable>

      <Pressable style={styles.pressableother}>
      <FontAwesome name="taxi" size={24} color="white" />
        <Text style={styles.text}>Taxi</Text>
      </Pressable>
    </View>
  );
};

export default HeaderComp;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1556ba",
    height: 65,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  pressable:{
    flexDirection:"row",
    color:"white",
    alignItems:"center",
    padding:14,
    borderStyle:"solid",
    borderColor:"white",
    borderWidth:2,
    borderRadius:25,
  },
  pressableother:{
    flexDirection:"row",
    color:"white",
    alignItems:"center",
    padding:14,
  },
  text:{
    marginLeft:10,
    color:"white",
    fontSize:15,
    fontWeight:"bold",
  }
});
