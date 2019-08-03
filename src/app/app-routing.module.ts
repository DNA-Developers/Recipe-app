import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'recipes', pathMatch: 'full' },
  {
    path: 'recipes',
    children: [
      {
        path: '',
        loadChildren: './recipes/recipes.module#RecipesPageModule'
      },
      {
        path: 'add-recipe',
        loadChildren: './recipes/add-recipe/add-recipe.module#AddRecipePageModule' 
      },
      {
        path: ':recipeId',
        loadChildren:
          './recipes/recipe-detail/recipe-detail.module#RecipeDetailPageModule'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

