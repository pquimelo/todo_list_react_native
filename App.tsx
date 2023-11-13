import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  FlatList,
  SafeAreaView,
} from "react-native";

import { FontAwesome } from "@expo/vector-icons";
import { ItemComponent } from "./src/components/Tarefa";
import { ITarefa, stageActivity } from "./src/interface/ITarefa";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#22272e",
    height: "100%",
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    color: "#FFF",
    marginTop: "5%",
    paddingStart: "5%",
    marginBottom: "5%",
  },
  input: {
    width: "75%",
    backgroundColor: "#FBFBFB",
    height: 44,
    borderRadius: 4,
    paddingHorizontal: 8,
  },
  containerInput: {
    flexDirection: "row",
    width: "100%",
    height: 44,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 22,
  },
  buttonAdd: {
    width: "14%",
    height: 44,
    backgroundColor: "#797979",
    marginLeft: 8,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
  },
  containerList: {
    paddingTop: 10,
    paddingBottom: 50,
    width: "100%",
    height: "90%",
  },
});

export default function App() {
  const [tarefa, setTarefa] = useState<string>("");
  const [list, setList] = useState<ITarefa[]>([
    {
      idTask: 0,
      name: "Aprender React Native",
      complexity: 1,
      stage: stageActivity.doing,
    },
    {
      idTask: 1,
      name: "Aprender Angular",
      complexity: 1,
      stage: stageActivity.waiting,
    },
    {
      idTask: 2,
      name: "Aprender C#",
      complexity: 1,
      stage: stageActivity.remake,
    },
    {
      idTask: 3,
      name: "Flutter é bom",
      complexity: 1,
      stage: stageActivity.completed,
    },
  ]);

  function handleAdd(task: string) {
    if (task == "") {
      return;
    }
    const addTask: ITarefa = {
      idTask: list.length + 1,
      name: task,
      complexity: 0,
      stage: stageActivity.waiting,
    };
    list.push(addTask);
    setList(list);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Tarefas</Text>
      <View style={styles.containerInput}>
        <TextInput
          value={tarefa}
          onChangeText={(text) => setTarefa(text)}
          style={styles.input}
          placeholder="Digite sua tarefa"
        />
        <TouchableOpacity
          style={styles.buttonAdd}
          onPress={() => {
            handleAdd(tarefa);
            setTarefa("");
          }}
        >
          <FontAwesome name="plus" size={20} color="#FFF"></FontAwesome>
        </TouchableOpacity>
      </View>
      <View style={styles.containerList}>
        <FlatList
          data={list}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <ItemComponent
              data={item}
              tasksList={list}
              setList={setList}
            ></ItemComponent>
          )}
        ></FlatList>
      </View>
    </SafeAreaView>
  );
}
