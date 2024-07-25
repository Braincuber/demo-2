//import liraries
import {
  Alert,
  FlatList,
  Image,
  Keyboard,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { scaleSize } from "../../common/Utils/constant";
import { FONTS } from "../../common/Utils/fonts";
import { COLORS } from "../../common/Utils/Colors";
import { IMAGE } from "../../common/Utils/image";
import CommonTextInput from "../../common/Components/CommonTextInput";


const TodoList = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    if(task == ""){
      Alert.alert("Alert", "Please enter task");
      return;
    }
    if (task) {
      const taskAdd = { id: Date.now(), text: task, completed: false };
      setTasks([taskAdd, ...tasks]);
      setTask("");
    }
  };

  const handleDelete = (item) => {
    const updatedTasks = tasks.filter((task) => task.id !== item.id);
    setTasks(updatedTasks);
  };



  function handleChecked(item) {
    console.log("id", item);
    setTasks(
      tasks.map((task) =>
        task.id === item?.id ? { ...task, completed: !task.completed } : task
      )
    );
    console.log("tasks", task.completed);
  }

  const renderItem = ({ item, index }) => (
    <View style={styles.task}>
      <Text
        style={[
          styles.itemList,
          { textDecorationLine: item.completed ? "line-through" : "none" },
        ]}
      >
        {item?.text}
      </Text>
      <View style={styles.taskButtons}>
        <TouchableOpacity onPress={() => handleDelete(item)}>
          <Image
            source={IMAGE.Delete}
            style={styles.editIcon}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleChecked(item)}>
          <Image
            source={item.completed ? IMAGE.Complete : IMAGE.Complete_outline}
            style={styles.editIcon}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.White} barStyle="dark-content" />
      <Text style={styles.heading}>To-do List</Text>
      <View style={styles.inputContainer}>
        <CommonTextInput
          placeholder="Enter new task"
          value={task}
          onChangeText={(text) => setTask(text)}
          componentStyle={{ width: "80%" }}
        />
        <TouchableOpacity style={styles.addButton} onPress={handleAddTask}>
          <Image source={IMAGE.Add} style={styles.addIcon} />
        </TouchableOpacity>
      </View>
      <FlatList
      showsVerticalScrollIndicator={false}
        data={tasks}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        ListEmptyComponent={
          <Text
            style={{
              alignSelf: "center",
              fontSize: scaleSize(18),
              fontFamily: FONTS.RMedium,
              color: COLORS.light_Gray_Rigth_border,
            }}
          >
           Currently no tasks found.
          </Text>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.White,
    padding: scaleSize(20),
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: scaleSize(20),
    justifyContent: "center",
  },
  addIcon: {
    width: scaleSize(50),
    height: scaleSize(50),
  },
  heading: {
    fontSize: scaleSize(24),
    fontFamily: FONTS.Bold,
    marginBottom: scaleSize(20),
    alignSelf: "center",
    color: COLORS.NewBlue,
  },

  addButton: {
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },

  task: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor:COLORS.GreyBorder,
  },
  itemList: {
    fontSize: scaleSize(18),
    fontFamily: FONTS.RMedium,
    flex: 1,
    color: COLORS.Black,
  },
  taskButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "30%",
  },

  editIcon: {
    height: scaleSize(20),
    width: scaleSize(20),
  },
});

export default TodoList;
