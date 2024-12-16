import React from "react";
import { SafeAreaView, StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const Home = ({ navigation }: { navigation: any }) => {
 return (
  <SafeAreaView style={styles.SafeAreaView}>
   <View style={styles.container}>
    <Text>Inicio</Text>
    <Button
     title="Ir a Acerca de"
     onPress={() => navigation.navigate("About")}
    />
   </View>
  </SafeAreaView>
 );
};

const About = () => {
 return (
  <SafeAreaView style={styles.SafeAreaView}>
   <View style={styles.container}>
    <Text>Acerca de</Text>
   </View>
  </SafeAreaView>
 );
};

function App(): JSX.Element {
 return (
  <NavigationContainer>
   <Stack.Navigator initialRouteName="Home">
    <Stack.Screen
     name="Home"
     component={Home}
     options={{ title: "Bienvenido a Inicio" }}
    />
    <Stack.Screen
     name="About"
     component={About}
     options={{ title: "Acerca de nosotros" }}
    />
   </Stack.Navigator>
  </NavigationContainer>
 );
}

const styles = StyleSheet.create({
 SafeAreaView: {
  flex: 1,
  backgroundColor: "#f0f0f0",
 },
 container: {
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
  padding: 20,
 },
});

export default App;
