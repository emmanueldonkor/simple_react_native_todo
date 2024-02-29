import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { addTodo, toggleTodo, deleteTodo } from '../features/todoSlice';
import TodoItem from '../components/TodoItem';

export default function HomeScreen() {
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todos.list);
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () => {
    const todo = newTodo.trim();
    if (todo !== '') {
      dispatch(addTodo(newTodo));
      setNewTodo('');
    }
  };

  const handleToggleTodo = (id: number) => {
    dispatch(toggleTodo(id));
  };

  const handleDeleteTodo = (id: number) => {
    dispatch(deleteTodo(id));
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter new todo"
          value={newTodo}
          onChangeText={(text) => setNewTodo(text)}
        />
        <Button title="    +    " onPress={handleAddTodo} />
      </View>
      <FlatList
        style={styles.todoList}
        data={todos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TodoItem
            todo={item}
            onToggle={() => handleToggleTodo(item.id)}
            onDelete={() => handleDeleteTodo(item.id)}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',  // Center vertically
        backgroundColor: '#f8f8f8',
        padding: 50,
      },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginRight: 10,
    borderRadius: 8,
  },
  todoList: {
    flex: 1,
  },

});

