import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Recipe } from '../types/Recipe';
import { MOCK_RECIPES } from '../mocks/recipes';
import uuid from 'react-native-uuid';

const STORAGE_KEY = '@reactcipes:favorites';
const STORAGE_RECIPES = '@reactcipes:custom_recipes';

export function useRecipes() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  async function loadFavoritesFromStorage() {
    const favData = await AsyncStorage.getItem(STORAGE_KEY);
    const customData = await AsyncStorage.getItem(STORAGE_RECIPES);

    const favoriteIds: string[] = favData ? JSON.parse(favData) : [];
    const customRecipes: Recipe[] = customData ? JSON.parse(customData) : [];

    const allRecipes = [...MOCK_RECIPES, ...customRecipes].map((r) => ({
      ...r,
      isFavorite: favoriteIds.includes(r.id),
    }));

    setRecipes(allRecipes);
  }

  useEffect(() => {
    loadFavoritesFromStorage();
  }, []);

  async function toggleFavorite(id: string) {
    const updated = recipes.map((r) =>
      r.id === id ? { ...r, isFavorite: !r.isFavorite } : r
    );
    setRecipes(updated);

    const newFavorites = updated
      .filter((r) => r.isFavorite)
      .map((r) => r.id);

    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(newFavorites));
  }

  async function addRecipe(recipe: Omit<Recipe, 'id' | 'isFavorite'>) {
    const newRecipe: Recipe = {
      ...recipe,
      id: uuid.v4() as string,
      isFavorite: false,
    };

    const stored = await AsyncStorage.getItem(STORAGE_RECIPES);
    const current: Recipe[] = stored ? JSON.parse(stored) : [];

    const updated = [...current, newRecipe];
    await AsyncStorage.setItem(STORAGE_RECIPES, JSON.stringify(updated));

    await loadFavoritesFromStorage();
  }

  const favorites = recipes.filter((r) => r.isFavorite);

  return {
    recipes,
    favorites,
    toggleFavorite,
    addRecipe,
    refreshFavorites: loadFavoritesFromStorage,
  };
}
