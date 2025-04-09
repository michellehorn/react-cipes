import { useLocalSearchParams } from 'expo-router';
import { useRecipes } from '../../hooks/useRecipes';
import { View, Text, StyleSheet, Image, ScrollView, Alert } from 'react-native';
import Header from '../../components/header/Header';
import Button from '../../components/button/Button';

export default function RecipeDetail() {
  const { id } = useLocalSearchParams();
  const { recipes, toggleFavorite } = useRecipes();

  const recipe = recipes.find((r) => r.id === id);

  if (!recipe) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Recipe not found 😕</Text>
      </View>
    );
  }

 async function toggleFavoriteRecipe(id: string, isFavorite: boolean) {
    await toggleFavorite(id);
    Alert.alert(
      isFavorite ? 'Removed from favorites' : 'Added to favorites',
      isFavorite ? 'Sorry you don`t like this one anymore :(' : 'YAY! You like this one!',
      [{ text: 'OK' }],
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Header title={recipe.title} />
      <Image source={{ uri: recipe.image }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.category}>{recipe.category}</Text>

        <Text style={styles.sectionTitle}>Ingredients</Text>
        {recipe.ingredients.map((item, i) => (
          <Text key={i} style={styles.text}>• {item}</Text>
        ))}

        <Text style={styles.sectionTitle}>Preparation</Text>
        <Text style={styles.text}>{recipe.steps}</Text>

        <Button
          title={recipe.isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
          icon={recipe.isFavorite ? 'heart-dislike' : 'heart'}
          onPress={() => toggleFavoriteRecipe(recipe.id, recipe.isFavorite)}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f4ef',
  },
  content: {
    padding: 16,
  },
  image: {
    width: '100%',
    height: 220,
  },
  category: {
    fontSize: 16,
    fontStyle: 'italic',
    color: '#888',
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
  },
});
