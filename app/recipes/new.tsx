import { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, Alert } from 'react-native';
import Header from '../../components/header/Header';
import Button from '../../components/button/Button';

export default function NewRecipe() {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [category, setCategory] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');

  function handleSave() {
    if (!title || !ingredients || !steps) {
      Alert.alert('Error', 'Please fill out all required fields.');
      return;
    }
    Alert.alert('Success', 'Recipe saved successfully!');
  }

  return (
    <ScrollView style={styles.container}>
      <Header title="New Recipe" />
      <View style={styles.form}>
        <Text style={styles.label}>Title *</Text>
        <TextInput style={styles.input} value={title} onChangeText={setTitle} />

        <Text style={styles.label}>Image URL</Text>
        <TextInput style={styles.input} value={image} onChangeText={setImage} />

        <Text style={styles.label}>Category</Text>
        <TextInput style={styles.input} value={category} onChangeText={setCategory} />

        <Text style={styles.label}>Ingredients *</Text>
        <TextInput
          style={[styles.input, styles.textarea]}
          value={ingredients}
          onChangeText={setIngredients}
          multiline
        />

        <Text style={styles.label}>Preparation Steps *</Text>
        <TextInput style={[styles.input, styles.textarea]} value={steps} onChangeText={setSteps} multiline />

        <Button title="Save Recipe" onPress={handleSave} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff3e6',
  },
  form: {
    padding: 16,
  },
  label: {
    fontWeight: 'bold',
    marginTop: 12,
    marginBottom: 4,
  },
  input: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  textarea: {
    height: 100,
    textAlignVertical: 'top',
  },
});
