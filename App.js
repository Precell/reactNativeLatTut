import { StyleSheet } from "react-native";
import { View, Text, TextInput, Button, ScrollView } from "react-native";
import { useState } from "react";

export default function App() {
  const [value, setValue] = useState("");
  const [listOfNotes, setListOfNotes] = useState([]);

  function handleOnchangeText(getEnteredText) {
    setValue(getEnteredText);
  }

  function handleOnpressButton() {
    console.log(value);
    setListOfNotes((currentNote) => [...currentNote, value]);
  }

  return (
    <View style={{ padding: 60, paddingHorizontal:15, flex: 1, }}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Add your Note here"
          style={styles.input}
          onChangeText={handleOnchangeText}
        />
        <Button color={"#000"} title="Add Note" onPress={handleOnpressButton} />
      </View>

      {/* Show Notes */}
      <View style={styles.listContainer}>
        <Text>SHow List Here</Text>
        <ScrollView>
          {listOfNotes.map((item, index) => (
            <Text key={`item${index}`} style={styles.listItem}>
              {item}
            </Text>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    paddingBottom: 30,
    borderBottomWidth: 1,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    width: 200,
    flex:1
  },
  listContainer: {
    paddingTop: 30,
    flex:3
  },
  listItem: {
    borderRadius: 1,
    borderColor: "red",
    backgroundColor: "green",
    padding: 20,
    marginBottom: 20,
    color: "#fff",
    fontSize: 20,
  },
});
