import React from "react";
import { SafeAreaView, View, Text, TouchableOpacity } from "react-native";
import { styles } from "../styles/styles";

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

export default Home;
