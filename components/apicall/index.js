import { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { View, Text } from "react-native";

export default function ApiCall() {
  // loading state
  // data state
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    async function getDataFromApi() {
      const apiResponse = await fetch("https://dummyjson.com/users");
      const finalData = await apiResponse.json();

      if (finalData) {
        setApiData(
          finalData.users.map(
            (userItem) =>
              `${userItem.firstName} ${userItem.lastName} ${userItem.age}`
          )
        );
      }
    }

    getDataFromApi();
  }, []);

  console.log(apiData);

  return (
    <View>
      <Text>Api Data</Text>

      <View>
        <FlatList
          data={apiData}
          renderItem={(itemData) => <Text>{itemData.item}</Text>}
        />
      </View>
    </View>
  );
}
