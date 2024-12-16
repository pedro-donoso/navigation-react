import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./components/Home";
import About from "./components/About";

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
 return (
  <NavigationContainer>
   <Stack.Navigator
    initialRouteName="Home"
    screenOptions={{
     headerStyle: {
      backgroundColor: "#007BFF", // Color de fondo de la barra de navegación
     },
     headerTintColor: "#FFFFFF", // Color del texto y botones en la barra de navegación
     headerTitleStyle: {
      fontWeight: "bold", // Estilo del título
     },
    }}
   >
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

export default App;
