import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import HeaderComp from "../components/HeaderComp";
import {
  BottomModal,
  ModalButton,
  ModalContent,
  ModalFooter,
  ModalTitle,
  SlideAnimation,
} from "react-native-modals";

const HomeScreen = () => {
  const [rooms, setRooms] = useState(1);
  const [adults, setAdults] = useState(2);
  const [child, setChild] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Booking.com ",
      headerTitleStyle: { fontSize: 25, fontWeight: "bold", color: "white" },
      headerStyle: {
        backgroundColor: "#1556ba",
        height: 120,
        borderBottomColor: "transparent",
        shadowColor: "transparent",
      },

      headerRight: () => (
        <Ionicons
          name="notifications-circle-sharp"
          size={24}
          color="white"
          style={{ marginRight: 30 }}
        />
      ),
    });
  }, []);

  return (
    <>
      <View>
        <HeaderComp></HeaderComp>
        <ScrollView>
          <View style={styles.outViewStyling}>
            <Pressable style={styles.pressable}>
              <Ionicons name="search-outline" size={24} color="black" />
              <TextInput placeholder="Enter your destination"></TextInput>
            </Pressable>
            <Pressable style={styles.pressable}>
              <Ionicons name="md-calendar-sharp" size={24} color="black" />
              <Text>Pick your date-range</Text>
            </Pressable>
            <Pressable
              style={styles.pressable}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Ionicons name="person-add" size={24} color="black" />
              <TextInput
                placeholderTextColor="red"
                placeholder="1room 2 adults 0 children"
              ></TextInput>
            </Pressable>
            <Pressable
              style={{
                backgroundColor: "#2a52be",
                paddingHorizontal: 20,
                gap: 40,
                paddingVertical: 15,
                borderColor: "#fdb800",
                borderWidth: 2,
                borderRadius: 10,
              }}
            >
              <Text
                style={{
                  color: "white",
                  textAlign: "center",
                  fontSize: 15,
                  fontWeight: "500",
                }}
              >
                Search
              </Text>
            </Pressable>
          </View>
        </ScrollView>
      </View>
      <BottomModal
        swipeThreshold={200}
        onBackdropPress={() => setModalVisible(!modalVisible)}
        swipeDirection={["up", "down"]}
        footer={
          <ModalFooter>
            <ModalButton
              text="Apply"
              style={{
                marginBottom: 20,
                color: "white",
                backgroundColor: "003588",
              }}
              onPress={() => setModalVisible(!modalVisible)}
            ></ModalButton>
          </ModalFooter>
        }
        modalTitle={<ModalTitle title="Select Rooms and Guests" />}
        modalAnimation={
          new SlideAnimation({
            slideFrom: "bottom",
          })
        }
        onHardwareBackPress={() => setModalVisible(!modalVisible)}
        visible={modalVisible}
        onTouchOutside={() => setModalVisible(!modalVisible)}
      >
        <ModalContent style={{ width: "100%", height: 310 }}></ModalContent>
      </BottomModal>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  outViewStyling: {
    margin: 20,
    borderColor: "#fdb800",
    borderWidth: 2,
    borderRadius: 6,
  },
  pressable: {
    flexDirection: "row",
    paddingHorizontal: 20,
    gap: 40,
    paddingVertical: 15,
    borderColor: "#fdb800",
    borderWidth: 2,
    borderRadius: 10,
  },
});
