import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { ProgressViewIOSComponent, ScrollView, StyleSheet, Text, View } from 'react-native';
import Task from './components/Tarefa';

var prop = {
  index: 1,
  task: 'Comprar bebida',
  deleteTask: function () {
    console.log('Deletado');
  }
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Lista de Tarefas</Text>
      <StatusBar style="auto" />
      <ScrollView style={styles.scrollView}>
        <Task index={prop.index} task={prop.task} deleteTask={prop.deleteTask}></Task>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1A3C',
  },
  heading: {
    color: "#fff",
    fontSize: 28,
    fontWeight: '600',
    marginTop: 55,
    marginLeft: 20,
    marginBottom: 38
  },
  scrollView: {
    marginBottom: 70,
  },
  taskContainer: {
    marginTop: 20,
  }
});
