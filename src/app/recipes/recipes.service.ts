import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})

export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: '1',
      title: 'Pretzel',
      imageUrl: 'https://cdn.shopify.com/s/files/1/0614/0993/products/3oz_1024x1024.jpg?v=1475243326',
      ingredients: ['flour', 'baking soda', 'oven']
  },
  {
    id: '2',
    title: 'Spaghetti',
    imageUrl: 'https://thecozyapron.com/wp-content/uploads/2019/05/spaghetti-bolognese_thecozyapron_1.jpg',
    ingredients: ['ground turkey', 'tomato sauce', 'edible strings', 'cheese', 'parmasean']
  }
];

  constructor() { }

  getAllRecipes() {
    return [...this.recipes];
  }
  getRecipe(recipeId: string) {
    return {
      ...this.recipes.find(recipe => {
      return recipe.id === recipeId;
    })};
  }
  deleteRecipe(recipeId: string) {
    this.recipes = this.recipes.filter(recipe => {
      return recipe.id !== recipeId;
    });
  }
  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
  }
}
