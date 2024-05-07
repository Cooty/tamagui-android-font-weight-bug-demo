import { StatusBar } from "expo-status-bar";
import { StyleSheet, Button, View, Text } from "react-native";
import { Label, Body, Title } from "./components/Typography";
import { useState } from "react";
import { ThemeManager } from "theme/context/Theme";
import { Text as TamaguiText } from "tamagui";

export default function App() {
  const [isBold, setIsBold] = useState(false);

  function handleToggleEmphasis() {
    setIsBold(!isBold);
  }

  return (
    <ThemeManager>
      <View style={styles.container}>
        <Title emphasis={isBold}>This is a title text</Title>
        <Body emphasis={isBold}>This is a body text</Body>
        <Label emphasis={isBold}>This is a label text</Label>
        <StatusBar style="auto" />

        <Button title="Toggle emphasis" onPress={handleToggleEmphasis} />

        <Text style={{ fontWeight: "600" }}>
          Native Text component that's bold
        </Text>
        <Body emphasis>My custom Body component set to bold</Body>
        <TamaguiText fontWeight="600">
          This here is the regular Text component from Tamagui
        </TamaguiText>
      </View>
    </ThemeManager>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
