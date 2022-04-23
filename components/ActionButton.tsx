import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { Octicons } from '@expo/vector-icons';
import AddTaskDialog from "./AddTaskDialog";


function ActionButton(propos:any) {

    const [visible, setVisible] = useState(false);

    function handleCancel() {
        setVisible(false);
    }

    function showDialog() {
        setVisible(true);
    }

    function addTask() {
        console.log("Adicionei ");
        setVisible(false);
    }


    return (
        <View>
            <TouchableOpacity
                style={{
                borderWidth: 1,
                borderColor: 'rgba(0,0,0,0.2)',
                alignItems: 'center',
                justifyContent: 'center',
                width: 70,
                position: 'absolute',
                bottom: 25,
                right: 25,
                height: 70,
                backgroundColor: '#fff',
                borderRadius: 100,
                }}
               onPress = {() => showDialog()} 
            >
        <Octicons name={"plus"} size={30} color='#01a699' />
        </TouchableOpacity>
        <AddTaskDialog visible={visible} handleCancel={handleCancel} add={addTask}></AddTaskDialog>
        </View>
    );
}


export default ActionButton;