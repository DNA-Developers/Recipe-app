import { Component, OnInit, ViewChild } from '@angular/core';
import { RecipesService } from '../recipes.service';
import { Recipe } from '../recipe.model';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.page.html',
  styleUrls: ['./add-recipe.page.scss'],
})
export class AddRecipePage implements OnInit {
  recipe: Recipe;
  @ViewChild('form', {static: false}) form: any;

  constructor(private recipeServices: RecipesService) {
  }
  ngOnInit() {
  }
  onSubmit({value}: NgForm) {
    // const recipeId = this.recipe.id.length + 1;
    this.recipeServices.addRecipe(value) ;
    console.log('this button works');
    console.log(value);
    this.form.reset();
  }
}
