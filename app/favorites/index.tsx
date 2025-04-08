import { View, FlatList, StyleSheet, Text } from 'react-native';
import { useRouter } from 'expo-router';
import RecipeCard from '../../components/recipe-card/RecipeCard';
import { useRecipes } from '../../hooks/useRecipes';
import { useFocusEffect } from '@react-navigation/native';
import { useCallback } from 'react';

export default function Favorites() {
  const { recipes, refreshFavorites } = useRecipes();
  const router = useRouter();

  const favoriteRecipes = recipes.filter((r) => r.isFavorite);

  useFocusEffect(
    useCallback(() => {
      refreshFavorites();
    }, [])
  );

  return (
    <View style={styles.container}>
      {favoriteRecipes.length === 0 ? (
        <Text style={styles.empty}>You have no favorite recipes yet 💔</Text>
      ) : (
        <FlatList
          data={favoriteRecipes}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <RecipeCard
              recipe={item}
              onPress={() => router.push(`/recipes/${item.id}`)}
            />
          )}
          contentContainerStyle={styles.list}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f4ef', // background from figma
  },
  list: {
    padding: 16,
    gap: 12,
  },
  empty: {
    textAlign: 'center',
    color: '#888',
    fontSize: 16,
    marginTop: 40,
  },
});
