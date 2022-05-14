import React, { useEffect, useState } from "react"
import { ScrollView, View, StyleSheet } from "react-native"
import Task from "./Task";
import ActionButton from "./ActionButton";
import TaskModel from "../models/TaskModel";
import TaskService from "../services/TaskService";

export default function TaskList() {

  let taskService: TaskService = TaskService.getInstance();

  const [taskList, setTaskList] = useState<TaskModel[]>([]);

  function deleteTaskByIndex(taskIndex:number): void {
    let newArray = [...taskList];     
    newArray.splice(newArray.findIndex(t => t.index + 1 === taskIndex), 1);
    setNewTaskList(newArray);
  }

  function addTask(newTask:TaskModel): void {
    taskList.push(newTask);
    setNewTaskList([...taskList]);
  }

  function setNewTaskList(newTaskList:TaskModel[]): void {
    taskService.save(newTaskList);
    setTaskList(newTaskList);
  }

  useEffect(()=> {
        let tasks: TaskModel[] | null = null;
        const getTasks = async() => {
            tasks = await taskService.loadAll();
            if (tasks !== null) {
                setTaskList(tasks);
            }    
        }
        
        getTasks();
    },[])

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
  