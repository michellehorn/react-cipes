
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Recipe } from '../types/Recipe';

const STORAGE_KEY = '@reactcipes:favorites';
const MOCK_RECIPES: Recipe[] = [
  {
    id: '1',
    title: 'Bolo de Cenoura',
    image:
      'https://i0.wp.com/canaldareceita.com.br/wp-content/uploads/2025/01/BOLO-DE-CENOURA-FOFINHO-DE-LIQUIDIFICADOR.jpg?fit=1000%2C600&ssl=1',
    category: 'Sobremesa',
    ingredients: [
      '3 cenouras médias',
      '3 ovos',
      '2 xícaras de açúcar',
      '1 xícara de óleo de canola',
      '2 xícaras de farinha de trigo',
      '1 pitada de sal',
      '1 colher de sopa de fermento químico',
    ],
    steps:
      'Bata no liquidificador as cenouras, ovos, óleo e açúcar até obter uma mistura homogênea. Em uma tigela, misture a farinha, o sal e o fermento. Combine as duas misturas, despeje em uma forma untada e asse em forno pré-aquecido a 180°C por aproximadamente 40 minutos.',
  },
  {
    id: '2',
    title: 'Bolo de Chocolate',
    image:
      'https://static.itdg.com.br/images/360-240/3b03a942ab534200a0a80eb324828ccb/246606-postprocess-71802381-1893-4fbe-b302-726bfca18774.jpg',
    category: 'Sobremesa',
    ingredients: [
      '4 ovos',
      '2 xícaras de açúcar',
      '1 e 3/4 xícaras de farinha de trigo',
      '3/4 xícara de cacau em pó',
      '1 e 1/2 colher de chá de bicarbonato de sódio',
      '1 colher de chá de sal',
      '1 xícara de leite',
      '1/2 xícara de óleo vegetal',
      '2 colheres de chá de essência de baunilha',
      '1 xícara de água fervente',
    ],
    steps:
      'Em uma tigela, misture os ovos, açúcar, farinha, cacau, bicarbonato e sal. Adicione o leite, óleo e baunilha, misturando bem. Por último, acrescente a água fervente. Despeje em uma forma untada e asse em forno pré-aquecido a 180°C por 35 a 40 minutos.',
  },
  {
    id: '3',
    title: 'Pudim de Leite Condensado',
    image: 'https://static.itdg.com.br/images/640-440/d1307a2e17cda187df76b78cfd3ac464/shutterstock-2322251819-1-.jpg',
    category: 'Sobremesa',
    ingredients: [
      '3 ovos',
      '1 lata de leite condensado',
      '2 medidas (da lata) de leite',
      '1 xícara de açúcar (para a calda)',
    ],
    steps:
      'Para a calda, derreta o açúcar em fogo baixo até obter um caramelo dourado e espalhe no fundo de uma forma. No liquidificador, bata os ovos, leite condensado e leite. Despeje na forma caramelizada e asse em banho-maria no forno pré-aquecido a 180°C por cerca de 1 hora. Deixe esfriar e desenforme.',
  },
  {
    id: '4',
    title: 'Torta de Maçã',
    image: 'https://assets.unileversolutions.com/recipes-v3/214902-default.jpg',
    category: 'Sobremesa',
    ingredients: [
      '6 maçãs descascadas e fatiadas',
      '1 colher de sopa de suco de limão',
      '1/2 xícara de açúcar',
      '1/2 colher de chá de canela em pó',
      '1/4 colher de chá de noz-moscada',
      '1 pitada de sal',
      '2 colheres de sopa de farinha de trigo',
      'Massa para torta (comprada pronta ou caseira)',
    ],
    steps:
      'Misture as maçãs com suco de limão, açúcar, canela, noz-moscada, sal e farinha. Forre uma forma com metade da massa, adicione o recheio de maçã e cubra com o restante da massa. Asse em forno pré-aquecido a 200°C por 45 a 50 minutos, até dourar.',
  },
  {
    id: '5',
    title: 'Mousse de Maracujá',
    image:
      'https://static.itdg.com.br/images/1200-630/8231acb174ba2e6a4b4a61145e48eea7/249008-shutterstock-1907121220.jpg',
    category: 'Sobremesa',
    ingredients: [
      '1 lata de leite condensado',
      '1 lata de creme de leite',
      '1 xícara de suco concentrado de maracujá',
      '1 envelope de gelatina incolor sem sabor',
      '1/4 xícara de água',
    ],
    steps:
      'Hidrate a gelatina na água e dissolva conforme instruções da embalagem. No liquidificador, bata o leite condensado, creme de leite e suco de maracujá. Adicione a gelatina dissolvida e bata até homogeneizar. Despeje em taças e leve à geladeira por, no mínimo, 4 horas antes de servir.',
  },
];

export function useRecipes() {
  const [recipes, setRecipes] = useState<Recipe[]>(MOCK_RECIPES);

  // Carrega favoritos do storage
  async function loadFavoritesFromStorage() {
    const data = await AsyncStorage.getItem(STORAGE_KEY);
    if (data) {
      const favoriteIds: string[] = JSON.parse(data);
      setRecipes((prev) =>
        prev.map((r) => ({
          ...r,
          isFavorite: favoriteIds.includes(r.id),
        }))
      );
    }
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

  const favorites = recipes.filter((r) => r.isFavorite);

  return { recipes, favorites, toggleFavorite, refreshFavorites: loadFavoritesFromStorage };
}
