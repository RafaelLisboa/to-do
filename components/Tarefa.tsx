import { StyleSheet, Text, View, TouchableOpacity, } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';


export default function Task(props: any) {
    return (
        <View style={styles.container}>
            <View style={styles.taskIndexContainer}>
                <Text style={styles.index}>{props.index}</Text>
            </View>
            <View style={styles.taskContainer}>
                <Text style={styles.task}>{props.task}</Text>
                <TouchableOpacity onPress={() => props.deleteTask()}>
                    <MaterialIcons style={styles.delete} name={"delete"} size={20} color={"#fff"}></MaterialIcons>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginHorizontal: 20
    },
    taskIndexContainer: {
        backgroundColor: "#3E3364",
        borderRadius: 15,
        marginRight: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50,
    },
    index: {
        color: "#fff",
        fontSize: 22,
        alignSelf: 'center'
    },
    taskContainer: {
        backgroundColor: "#3E3364",
        borderRadius: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical: 5,
        minHeight: 50,
    },
    task: {
        color: '#fff',
        width: '90%',
        fontSize: 20,
        textAlign: 'center'
    },
    delete: {
        marginLeft: 10
    }
});
