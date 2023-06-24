import { StyleSheet } from "react-native";
import {
  View,
  Text,
  TextInput,
  Button,
  ScrollView,
  FlatList,
  Pressable,
} from "react-native";
import { useState } from "react";
import ApiCall from "./components/apicall";

export default function App() {
  const [value, setValue] = useState("");
  const [listOfNotes, setListOfNotes] = useState([]);

  function handleOnchangeText(getEnteredText) {
    setValue(getEnteredText);
  }

  function handleOnpressButton() {
    setListOfNotes((currentNote) => [...currentNote, value]);
    setValue("");
  }

  function handleRemoveItem(getCurrentIndex) {
    console.log("item pressed here");
    let cpyListOfNotes = [...listOfNotes];
    cpyListOfNotes = cpyListOfNotes.filter(
      (_, index) => getCurrentIndex !== index
    );
    setListOfNotes(cpyListOfNotes);
  }

  return (
    <View style={{ padding: 60, paddingHorizontal: 15, flex: 1 }}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Add your Note here"
          style={styles.input}
          onChangeText={handleOnchangeText}
          value={value}
        />
        <Button color={"#000"} title="Add Note" onPress={handleOnpressButton} />
      </View>

      {/* Show Notes */}
      <View style={styles.listContainer}>
        <Text>SHow List Here</Text>
        <FlatList
          data={listOfNotes}
          renderItem={(itemData) => (
            <Pressable onPress={() => handleRemoveItem(itemData.index)}>
              <Text style={styles.listItem}>{itemData.item}</Text>
            </Pressable>
          )}
        />
      </View>

      {/*  API component*/}
      <View style={styles.apiContainer}>
        <ApiCall />
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
    flex: 1,
  },
  listContainer: {
    paddingTop: 30,
    flex: 2,
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
  apiContainer:{
    flex:1
  }
});
