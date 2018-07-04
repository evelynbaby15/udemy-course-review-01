import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {

  constructor() { }

  private recipes: Recipe[] = [
    new Recipe(
      'hambger',
      'This is big hamber',
      'https://static-communitytable.parade.com/wp-content/uploads/2017/09/low-carb-hamburger-casserole-recipes-f.jpg'),
      new Recipe(
        'hambger2',
        'This is big hamber2',
        'https://static-communitytable.parade.com/wp-content/uploads/2017/09/low-carb-hamburger-casserole-recipes-f.jpg')
    ]
  ;

  recipeSelected = new EventEmitter<Recipe>();

  getRecipes() {
    return this.recipes.slice(); // returns a new array (receive a copy of this array)
  }

}
