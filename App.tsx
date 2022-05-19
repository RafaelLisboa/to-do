import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TaskList from './components/TaskList';

export default function App() {


  return (
    <View style={styles.container}>
      <StatusBar style="inverted" />
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
