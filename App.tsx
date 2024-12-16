import React from "react";
import {
 SafeAreaView,
 StyleSheet,
 Text,
 View,
 TouchableOpacity,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const Home = ({ navigation }: { navigation: any }) => {
 const navigateToAbout = () => {
  navigation.navigate("About");
 };

 return (
  <SafeAreaView style={styles.safeAreaView}>
   <View style={styles.container}>
    <Text style={styles.title}>Inicio</Text>
    <TouchableOpacity
     style={styles.button}
     onPress={navigateToAbout}
     accessibilityLabel="Ir a la pantalla Acerca de"
    >
     <Text style={styles.buttonText}>Ir a Acerca de</Text>
    </TouchableOpacity>
   </View>
  </SafeAreaView>
 );
};

const About = () => {
 return (
  <SafeAreaView style={styles.safeAreaView}>
   <View style={styles.container}>
    <Text>
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, dolorum
     laborum? Nostrum quasi expedita, facere explicabo, quos reprehenderit iusto
     harum a eius repellat ipsa! Libero, incidunt excepturi molestiae,
     temporibus non ab adipisci quo eveniet sunt nesciunt nemo dicta possimus,
     odio natus. Ullam dolor consectetur quae accusantium? Saepe blanditiis
     soluta distinctio?
    </Text>
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
 safeAreaView: {
  flex: 1,
  backgroundColor: "#f0f0f0",
 },
 container: {
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
  padding: 20,
 },
 title: {
  fontSize: 24,
  fontWeight: "bold",
  marginBottom: 20,
 },
 button: {
  backgroundColor: "#007BFF", 
  paddingVertical: 10, 
  paddingHorizontal: 20, 
  borderRadius: 5, 
 },
 buttonText: {
  color: "#FFFFFF", 
  fontSize: 16, 
  textAlign: "center", 
 },
});

export default App;
