### 1. Creo proyecto expo con plantilla en blanco:

```
npx create-expo-app@latest nombre-proyecto --template blank
```

### 2. Instalo dependencias:
```
npx expo install react-dom react-native-web @expo/metro-runtime
```

```
npm i @react-navigation/native
```

```
npm i react-native-screens react-native-safe-area-context
```

```
npm i @react-navigation/native-stack
```

### 3. Cambio título de la App:
```
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Tenemos aquí la app</Text>
      <StatusBar style="auto" />
    </View>
  );
}
```

### 4. Iniciar proyecto:
```
npm start
```
