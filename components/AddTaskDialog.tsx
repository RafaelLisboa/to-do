import React, { View } from "react-native";
import Dialog from "react-native-dialog";

function AddTaskDialog(props:any) {

    return (
        <View>
            <Dialog.Container visible={props.visible}>
                <Dialog.Title>Adicionar Tarefa</Dialog.Title>
                <Dialog.Input></Dialog.Input>
                <Dialog.Button label="Cancel" onPress={() => props.handleCancel()} />
                <Dialog.Button label="Add" onPress={() => props.add()} />
            </Dialog.Container>
        </View>
    )
}

export default AddTaskDialog;