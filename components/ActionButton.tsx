import React, { useState } from "react";
import { TouchableOpacity, View,  StyleSheet } from "react-native";
import { Octicons } from '@expo/vector-icons';
import AddTaskDialog from "./AddTaskDialog";
import TaskModel from "../models/TaskModel";


function ActionButton(propos:any) {

    const [visible, setVisible] = useState(false);

    function handleCancel() {
        setVisible(false);
    }

    function showDialog() {
        setVisible(true);
    }

    function addTask(text:string) {
        setVisible(false);
        const task:TaskModel = {
            index: 4,
            task: text,
            finished: false
        }
        propos.addTask(task);
    }


    return (
        <View >
            <TouchableOpacity
                style={{
                borderWidth: 1,
                borderColor: 'rgba(0,0,0,0.2)',
                alignItems: 'center',
                justifyContent: 'center',
                width: 70,
                position: 'absolute',
                right: 25,
                top: 80,
                height: 70,
                backgroundColor: '#fff',
                borderRadius: 100,
                zIndex: 999999999
                }}
               onPress = {() => showDialog()} 
            >
        <Octicons name={"plus"} size={30} color='#01a699' />
        </TouchableOpacity>
        <AddTaskDialog visible={visible} handleCancel={handleCancel} add={addTask}></AddTaskDialog>
        </View>
    );
}

const styles = StyleSheet.create({
    button : {
        position: 'absolute',
        right:845,

        zIndex: 99999999
    }
})

export default ActionButton;