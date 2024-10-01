// MenuForm.tsx
import React, { useState } from 'react';
import { View, TextInput, Button, Picker, StyleSheet } from 'react-native';

const MenuForm = ({ addMenuItem }) => {
  const [dishName, setDishName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [course, setCourse] = useState('');

  // Function to handle adding new items
  const handleAddItem = () => {
    if (dishName && description && price && course) {
      addMenuItem({ dishName, description, price, course });
      setDishName('');
      setDescription('');
      setPrice('');
      setCourse('');
    }
  };

  return (
    <View style={styles.formContainer}>
      <TextInput
        style={styles.input}
        placeholder="Dish Name"
        value={dishName}
        onChangeText={setDishName}
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
      />
      <TextInput
        style={styles.input}
        placeholder="Price"
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
      />
      <Picker
        selectedValue={course}
        style={styles.picker}
        onValueChange={(value) => setCourse(value)}
      >
        <Picker.Item label="Select Course" value="" />
        <Picker.Item label="Starters" value="Starters" />
        <Picker.Item label="Mains" value="Mains" />
        <Picker.Item label="Desserts" value="Desserts" />
      </Picker>
      <Button title="Add Menu Item" onPress={handleAddItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    marginTop: 20,
  },
  input: {
    height: 40,
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        borderRadius: 5,
      },
      picker: {
        height: 50,
        width: '100%',
        marginBottom: 10,
      },
    });
    
    export default MenuForm;