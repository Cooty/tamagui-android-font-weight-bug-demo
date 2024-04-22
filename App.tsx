import { StatusBar } from "expo-status-bar";
import { StyleSheet, Button, View } from "react-native";
import { Label, Body, Title } from "./components/Typography";
import { useState } from "react";
import { ThemeManager } from "theme/context/Theme";

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
