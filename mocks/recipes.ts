import { Recipe } from "../types/Recipe";

export const MOCK_RECIPES: Recipe[] = [
  {
    id: '1',
    title: 'Carrot Cake',
    image: 'https://i0.wp.com/canaldareceita.com.br/wp-content/uploads/2025/01/BOLO-DE-CENOURA-FOFINHO-DE-LIQUIDIFICADOR.jpg?fit=1000%2C600&ssl=1',
    category: 'Dessert',
    ingredients: [
      '3 medium carrots',
      '3 eggs',
      '2 cups of sugar',
      '1 cup of canola oil',
      '2 cups of all-purpose flour',
      '1 pinch of salt',
      '1 tablespoon of baking powder',
    ],
    steps:
      'Blend the carrots, eggs, oil, and sugar until smooth. In a bowl, mix flour, salt, and baking powder. Combine both mixtures, pour into a greased pan and bake at 180°C (350°F) for about 40 minutes.',
  },
  {
    id: '2',
    title: 'Chocolate Cake',
    image: 'https://static.itdg.com.br/images/360-240/3b03a942ab534200a0a80eb324828ccb/246606-postprocess-71802381-1893-4fbe-b302-726bfca18774.jpg',
    category: 'Dessert',
    ingredients: [
      '4 eggs',
      '2 cups of sugar',
      '1 3/4 cups of all-purpose flour',
      '3/4 cup of cocoa powder',
      '1 1/2 teaspoons of baking soda',
      '1 teaspoon of salt',
      '1 cup of milk',
      '1/2 cup of vegetable oil',
      '2 teaspoons of vanilla extract',
      '1 cup of boiling water',
    ],
    steps:
      'In a bowl, mix eggs, sugar, flour, cocoa, baking soda, and salt. Add milk, oil, and vanilla and mix well. Lastly, add boiling water. Pour into a greased pan and bake at 180°C (350°F) for 35–40 minutes.',
  },
  {
    id: '3',
    title: 'Condensed Milk Flan',
    image: 'https://static.itdg.com.br/images/640-440/d1307a2e17cda187df76b78cfd3ac464/shutterstock-2322251819-1-.jpg',
    category: 'Dessert',
    ingredients: [
      '3 eggs',
      '1 can of sweetened condensed milk',
      '2 cans (using the condensed milk can) of milk',
      '1 cup of sugar (for the caramel)',
    ],
    steps:
      'Melt the sugar over low heat until golden to make the caramel, and spread it on the bottom of a pan. Blend the eggs, condensed milk, and milk. Pour into the caramelized pan and bake in a water bath at 180°C (350°F) for about 1 hour. Let it cool and unmold.',
  },
  {
    id: '4',
    title: 'Apple Pie',
    image: 'https://assets.unileversolutions.com/recipes-v3/214902-default.jpg',
    category: 'Dessert',
    ingredients: [
      '6 peeled and sliced apples',
      '1 tablespoon of lemon juice',
      '1/2 cup of sugar',
      '1/2 teaspoon of ground cinnamon',
      '1/4 teaspoon of nutmeg',
      '1 pinch of salt',
      '2 tablespoons of all-purpose flour',
      'Pie crust (store-bought or homemade)',
    ],
    steps:
      'Mix apples with lemon juice, sugar, cinnamon, nutmeg, salt, and flour. Line a pie dish with half the crust, add the apple filling, and cover with the remaining crust. Bake at 200°C (390°F) for 45–50 minutes, until golden brown.',
  },
  {
    id: '5',
    title: 'Passion Fruit Mousse',
    image: 'https://static.itdg.com.br/images/1200-630/8231acb174ba2e6a4b4a61145e48eea7/249008-shutterstock-1907121220.jpg',
    category: 'Dessert',
    ingredients: [
      '1 can of sweetened condensed milk',
      '1 can of heavy cream',
      '1 cup of concentrated passion fruit juice',
      '1 packet of unflavored gelatin',
      '1/4 cup of water',
    ],
    steps:
      'Hydrate the gelatin in the water and dissolve it according to the package. Blend the condensed milk, cream, and juice. Add the dissolved gelatin and blend until smooth. Pour into glasses and chill for at least 4 hours before serving.',
  },
];
