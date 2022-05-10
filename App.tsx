import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import ActionButton from './components/ActionButton';
import Task from './components/Task';
import TaskList from './components/TaskList';
import taskMocks from './mocks/TaskMocks';
import TaskModel from './models/TaskModel';

export default function App() {


  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.heading}>Lista de Tarefas</Text>
      <TaskList></TaskList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003964',
  },
  heading: {
    color: "#fff",
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 55,
    marginLeft: 20,
    marginBottom: 38
  },
  scrollView: {
    marginBottom: 70,
  },

});
