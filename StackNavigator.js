import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from '@react-navigation/native';

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import SavedScreen from "./screens/SavedScreen";
import BookingScreen from "./screens/BookingScreen";
import ProfileScreen from "./screens/ProfileScreen";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const primary_color="#1556ba";

const StackNavigator = () => {
  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();

  function BottomTabs() {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: "Home",
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <FontAwesome5 name="home" size={24} color={primary_color} />
              ) : (
                <Ionicons name="home-outline" size={24} color={primary_color} />
              ),
          }}
        ></Tab.Screen>
        <Tab.Screen
          name="Saved"
          component={SavedScreen}
          options={{
            tabBarLabel: "Saved",
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Ionicons name="ios-save" size={24} color={primary_color} />
              ) : (
                <Ionicons name="save-outline" size={24} color={primary_color} />
              ),
          }}
        ></Tab.Screen>
        <Tab.Screen
          name="Booking"
          component={BookingScreen}
          options={{
            tabBarLabel: "Booking",
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Ionicons name="ios-save" size={24} color={primary_color} />
              ) : (
                <Ionicons
                  name="notifications-outline"
                  size={24}
                  color={primary_color}
                />
              ),
          }}
        ></Tab.Screen>
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarLabel: "Profile",
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Ionicons name="person" size={24} color={primary_color} />
              ) : (
                <Ionicons name="person-outline" size={24} color={primary_color} />
              ),
          }}
        ></Tab.Screen>
      </Tab.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={BottomTabs} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
