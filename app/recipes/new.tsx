import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import Header from '../../components/header/Header';
import Button from '../../components/button/Button';
import { useRecipes } from '../../hooks/useRecipes';
import { useRouter } from 'expo-router';

export default function NewRecipeScreen() {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [category, setCategory] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');

  const { addRecipe } = useRecipes();
  const router = useRouter();

  async function handleSave() {
    if (!title || !ingredients || !steps) {
      Alert.alert('Missing Info', 'Please fill out the required fields.');
      return;
    }

    await addRecipe({
      title,
      image,
      category,
      ingredients: ingredients.split('\n').filter(Boolean),
      steps,
    });

    Alert.alert('Recipe added!', 'Redirecting to recipe list...');
    router.replace('/recipes');
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Header title="New Recipe" />

        <Text style={styles.label}>Title *</Text>
        <TextInput style={styles.input} value={title} onChangeText={setTitle} />

        <Text style={styles.label}>Image URL</Text>
        <TextInput style={styles.input} value={image} onChangeText={setImage} />

        <Text style={styles.label}>Category</Text>
        <TextInput style={styles.input} value={category} onChangeText={setCategory} />

        <Text style={styles.label}>Ingredients * (one per line)</Text>
        <TextInput
          style={[styles.input, styles.textarea]}
          value={ingredients}
          onChangeText={setIngredients}
          multiline
        />

        <Text style={styles.label}>Preparation *</Text>
        <TextInput
          style={[styles.input, styles.textarea]}
          value={steps}
          onChangeText={setSteps}
          multiline
        />

        <Button title="Save Recipe" icon="save" onPress={handleSave} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f9f4ef',
    padding: 16,
    paddingBottom: 60,
  },
  label: {
    fontWeight: 'bold',
    marginTop: 12,
    marginBottom: 4,
    color: '#333',
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
