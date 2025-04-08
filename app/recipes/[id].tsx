import { useLocalSearchParams } from 'expo-router';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import { useRecipes } from '../../hooks/useRecipes';
import Header from '../../components/header/Header';
import Button from '../../components/button/Button';
import { Ionicons } from '@expo/vector-icons';
import { useFocusEffect } from '@react-navigation/native';
import { useCallback } from 'react';

export default function DetalheReceita() {
  const { id } = useLocalSearchParams();
  const { recipes, toggleFavorite, refreshFavorites } = useRecipes();
  const recipe = recipes.find((r) => r.id === id);

  if (!recipe) return <Text>Receita não encontrada</Text>;

  useFocusEffect(
    useCallback(() => {
      refreshFavorites();
    }, [])
  );

  return (
    <ScrollView style={styles.container}>
      <Header title={recipe.title} />
      <Image source={{ uri: recipe.image }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.category}>{recipe.category}</Text>
        <Text style={styles.sectionTitle}>Ingredientes</Text>
        {recipe.ingredients.map((item, idx) => (
          <Text key={idx} style={styles.text}>
            • {item}
          </Text>
        ))}
        <Text style={styles.sectionTitle}>Modo de Preparo</Text>
        <Text style={styles.text}>{recipe.steps}</Text>
        <Button
          title={recipe?.isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
          icon={recipe?.isFavorite ? 'heart-dislike' : 'heart'}
          onPress={() => toggleFavorite(recipe?.id)}
        ></Button>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff3e6',
  },
  image: {
    width: '100%',
    height: 160,
  },
  content: {
    padding: 16,
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
