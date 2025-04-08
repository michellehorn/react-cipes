export interface Recipe {
  id: string;
  title: string;
  image: string;
  category: string;
  ingredients: string[];
  steps: string;
  isFavorite?: boolean;
}
