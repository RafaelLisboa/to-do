import { useState } from "react";
import React, { View } from "react-native";
import Dialog from "react-native-dialog";

function AddTaskDialog(props:any) {

    const [text, setText] = useState("");

    return (
        <View>
            <Dialog.Container visible={props.visible}>
                <Dialog.Title>Adicionar Tarefa</Dialog.Title>
                <Dialog.Input onChangeText={(txt) => setText(txt)}></Dialog.Input>
                <Dialog.Button label="Cancel" onPress={() => props.handleCancel()} />
                <Dialog.Button label="Add" onPress={() => props.add(text)} />
            </Dialog.Container>
        </View>
    )
}

export default AddTaskDialog;