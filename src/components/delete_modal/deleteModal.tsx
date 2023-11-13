import { Modal, TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { ITarefa } from "../../interface/ITarefa";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

interface Props {
  data: boolean;
  information: ITarefa;
  showModal: (param: boolean) => void;
  setList: (param: ITarefa[]) => void;
  tasksList: ITarefa[];
}

const styles = StyleSheet.create({
  viewOutside: {
    elevation: 6,
  },
  viewModal: {
    width: "90%",
    height: 20,
    backgroundColor: "red",
  },
  viewOuter: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    opacity: 1,
  },
  bodyModal: {
    width: "75%",
    height: "30%",
    backgroundColor: "white",
    borderRadius: 6,
  },
  headerModal: {
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    height: 50,
  },
  containerIconClose: {
    justifyContent: "center",
    alignItems: "center",
    width: "20%",
    height: 50,
  },
  containerIconTrash: {
    justifyContent: "center",
    alignItems: "center",
    width: "20%",
    height: 50,
  },
  containerTextHeader: {
    justifyContent: "center",
    alignItems: "flex-start",
    width: "60%",
    height: 50,
  },
  contentModal: {
    width: "100%",
    height: "55%",
  },
  headerContent: {
    marginLeft: 20,
    flexDirection: "row",
  },
  deleteText: {
    color: "red",
  },
  informationTask: {
    marginTop: 15,
    marginLeft: 20,
  },
  footerModal: {
    justifyContent: "center",
    flexDirection: "row",
    height: "25%",
    alignItems: "center",
  },
  cancelButton: {
    marginRight: 20,
    height: "60%",
    alignItems: "center",
    justifyContent: "center",
    width: "40%",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 8,
  },
  deleteButton: {
    backgroundColor: "red",
    height: "60%",
    alignItems: "center",
    justifyContent: "center",
    width: "40%",
    elevation: 10,
    borderColor: "red",
    borderWidth: 1,
    borderRadius: 8,
  },
  textDeleteButton: {
    color: "white",
  },
});

export function DeleteModal({
  data,
  showModal,
  information,
  tasksList,
  setList,
}: Props) {
  return (
    <View style={styles.viewOutside}>
      <Modal
        style={styles.viewModal}
        visible={data}
        transparent={true}
        animationType="fade"
      >
        <View style={styles.viewOuter}>
          <View style={styles.bodyModal}>
            <View style={styles.headerModal}>
              <View style={styles.containerIconTrash}>
                <FontAwesome name="trash" size={20} color="red"></FontAwesome>
              </View>
              <View style={styles.containerTextHeader}>
                <Text>Excluir tarefa</Text>
              </View>
              <View style={styles.containerIconClose}>
                <TouchableOpacity
                  // style={}
                  onPress={() => {
                    showModal(false);
                  }}
                >
                  <FontAwesome
                    name="close"
                    size={20}
                    color="black"
                  ></FontAwesome>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.contentModal}>
              <View style={styles.headerContent}>
                <Text> Deseja </Text>
                <Text style={styles.deleteText}>excluir</Text>
                <Text> a tarefa abaixo?</Text>
              </View>
              <View style={styles.informationTask}>
                <Text>
                  Nome tarefa:{" "}
                  <Text style={{ fontWeight: "bold" }}>{information.name}</Text>{" "}
                </Text>
                <Text>Status tarefa: {information.stage}</Text>
                <Text>Prioridade: {information.complexity}</Text>
              </View>
            </View>
            <View style={styles.footerModal}>
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={() => {
                  showModal(false);
                }}
              >
                <Text>Cancelar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => {
                  const updatedTasks = tasksList.filter(
                    (task) => task.idTask !== information.idTask
                  );
                  setList(updatedTasks);
                }}
              >
                <Text style={styles.textDeleteButton}>Deletar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
