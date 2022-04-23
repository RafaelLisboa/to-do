import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import ActionButton from './components/ActionButton';
import Task from './components/Task';

let prop = {
  index: 1,
  task: 'Comprar Alface',
  deleteTask: function () {
    console.log('Deletado');
  }
  
}

let prop2 = {
  index: 2,
  task: 'Terminar o Livro',
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
        <Task index={prop2.index} task={prop2.task} deleteTask={prop2.deleteTask}></Task>
      </ScrollView>
      <ActionButton></ActionButton>
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
  }
  
});
