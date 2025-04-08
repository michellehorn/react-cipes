import { View, FlatList, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import RecipeCard from '../../components/recipe-card/RecipeCard';
import { useRecipes } from '../../hooks/useRecipes';
import { useState } from 'react';
import SearchBar from '../../components/search-bar/SearchBar';

export default function RecipeList() {
  const { recipes } = useRecipes();
  const router = useRouter();
  const [query, setQuery] = useState('');

  const filtered = recipes.filter((recipe) => {
    const q = query.toLowerCase();
    return (
      recipe.title.toLowerCase().includes(q) ||
      recipe.category.toLowerCase().includes(q) ||
      recipe.ingredients.some((ing) => ing.toLowerCase().includes(q))
    );
  });

  return (
    <View style={styles.container}>
      <SearchBar value={query} onChange={setQuery} />
      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <RecipeCard recipe={item} onPress={() => router.push(`/recipes/${item.id}`)} />}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f4ef', // light background as in figma
  },
  list: {
    padding: 16,
    gap: 12,
  },
});
