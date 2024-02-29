
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

interface ITodoItemProps {
  todo: {
    id: number;
    description: string;
    completed: boolean;
  };
  onToggle: () => void;
  onDelete: () => void;
}

 export default function TodoItem({ todo, onToggle, onDelete }: ITodoItemProps) {
  return (
    <TouchableOpacity onPress={onToggle} style={styles.todoItem}>
      <View style={styles.todoContainer}>
        <Text style={[styles.todoText, { textDecorationLine: todo.completed ? 'line-through' : 'none' }]}>
          {todo.description}
        </Text>
        <TouchableOpacity onPress={onDelete}>
          <MaterialIcons name="delete" size={24} color="red" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  todoItem: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    elevation: 2,
  },
  todoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  todoText: {
    flex: 1,
  },
});

