import AsyncStorage from '@react-native-async-storage/async-storage';
import { Task } from 'react-native';
import TaskModel from '../models/TaskModel';

export default class TaskService {

    private static instance:TaskService;
    private static readonly DEFAULT_KEY = "@Tasks";

    private constructor() {
    }

    public static getInstance(): TaskService {
        if (!TaskService.instance) {
            TaskService.instance = new TaskService();
        }
        return TaskService.instance;
    }

    public async save(value: TaskModel[]): Promise<void> {
        
        
        try {
            const jsonString = JSON.stringify(value);
            await AsyncStorage.setItem(TaskService.DEFAULT_KEY, jsonString);
        }
        catch (error) {
            //TODO: implementar futuramente tratamento de erro
            alert(error);
        }
    }

    public async loadAll(): Promise<TaskModel[] | null> {
        let tasks: TaskModel[] | null = null;

        try {
            const tasksStringJson: string | null = await AsyncStorage.getItem(TaskService.DEFAULT_KEY);
           
            if (!tasksStringJson)
                return null;
            
            tasks = JSON.parse(tasksStringJson);
        }
        catch (error) {
            //TODO: implementar futuramente tratamento de erro
            alert(error);
        }
        
        return tasks;

    }

}