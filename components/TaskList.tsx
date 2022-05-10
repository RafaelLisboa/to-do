import React, { useEffect, useState } from "react"
import { ScrollView, View, StyleSheet } from "react-native"
import taskMocks from "../mocks/TaskMocks";
import Task from "./Task";
import ActionButton from "./ActionButton";
import TaskModel from "../models/TaskModel";

export default function TaskList() {
    
  const [taskList, setTaskList] = useState<TaskModel[]>(taskMocks);

  function deleteTaskByIndex(taskIndex:number) {
    let newArray = [...taskList];     
    newArray.splice(newArray.findIndex(t => t.index + 1 === taskIndex), 1);
    setTaskList(newArray);
  }

  function addTask(newTask:TaskModel) {
    taskList.push(newTask);
      setTaskList([...taskList]);
  }

    return (
        <View>
        <ScrollView>
            {
                taskList.map((t, index) => {
                    return <Task key={index} index={index + 1} task={t.task} deleteTask={deleteTaskByIndex}></Task>
                })
            }
        </ScrollView>
        <View style={styles.button}>
            <ActionButton addTask={addTask}></ActionButton>
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        marginTop: 300
    }
    
    
  });
  