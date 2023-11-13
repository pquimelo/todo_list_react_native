import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import { ITarefa, stageActivity } from "../interface/ITarefa";
import React, { useState } from "react";
import { DeleteModal } from "./delete_modal/deleteModal";
import { FontAwesome } from "@expo/vector-icons";

interface Props {
  data: ITarefa;
  tasksList: ITarefa[];
  setList: (param: ITarefa[]) =>void;
}
const styles = StyleSheet.create({
  list: {
    flexDirection: "row",
    width: "90%",
    height: 44,
    paddingLeft: 10,
    paddingRight: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#dddddd",
    marginBottom: 20,
    marginEnd: 20,
    marginStart: 20,
    borderRadius: 8,
  },
  statusTask: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    width: "40%",
  },
  styleName: {
    width: "60%",
  },
  containerIconDelete: {
    width: "40%",
    height: 44,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "blue",
  },
  containerIconEdit: {
    width: "40%",
    height: 44,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "red",
  },
});
export function ItemComponent({ data, tasksList, setList }: Props) {
  const [showModal, setShowModal] = useState(false);

  function showDeleteModal() {
    setShowModal(true);
  }
  return (
    <View style={styles.list}>
      <View style={styles.styleName}>
        <Text>{data.name}</Text>

        {showModal && (
          <DeleteModal
            data={showModal}
            information={data}
            showModal={setShowModal}
            tasksList={tasksList}
            setList={setList}
          ></DeleteModal>
        )}
      </View>

      <View style={styles.statusTask}>
        <TouchableOpacity
          style={styles.containerIconDelete}
          onPress={showDeleteModal}
        >
          <View>
            <FontAwesome name="trash" size={20} color="red"></FontAwesome>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.containerIconEdit}
          onPress={() => {
            //TODO: COLOCAR AQUI A ROTA PARA EDITAR EM OUTRA TELA
          }}
        >
          <View>
            <FontAwesome name="edit" size={20} color="black"></FontAwesome>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
