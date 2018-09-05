import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Ingredient } from './../shared/ingredient.model';
import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {

  constructor(private sls: ShoppingListService) { }

  private recipes: Recipe[] = [
    new Recipe(
      'hambger',
      'This is big hamber',
      'https://static-communitytable.parade.com/wp-content/uploads/2017/09/low-carb-hamburger-casserole-recipes-f.jpg',
      [
        new Ingredient('buns', 2),
        new Ingredient('meat', 1)
      ]
    ),
      new Recipe(
        'hambger2',
        'This is big hamber2',
        'https://images.pexels.com/photos/47725/hamburger-food-meal-tasty-47725.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        [
          new Ingredient('vegetables', 10),
          new Ingredient('beff', 1)
        ]
      )
    ]
  ;

  //recipeSelected = new EventEmitter<Recipe>();

  getRecipes() {
    return this.recipes.slice(); // returns a new array (receive a copy of this array)
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngreToShoppingList(ingres: Ingredient[]) {
    this.sls.addIngredients(ingres);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
  }

}
