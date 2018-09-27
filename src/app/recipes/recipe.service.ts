import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Ingredient } from './../shared/ingredient.model';
import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class RecipeService {

  recipeEventChanged = new Subject<Recipe[]>();

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
    this.recipeEventChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipeEventChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipeEventChanged.next(this.recipes.slice());
  }

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipeEventChanged.next(this.recipes.slice());
  }

}
