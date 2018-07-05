import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable()
export class ShoppingListService {
  
  ingredientChanged = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Oriange', 10)
  ];

  constructor() { }

  addIngredient(data: Ingredient) {
    this.ingredients.push(data);
    this.ingredientChanged.emit(this.ingredients.slice()); // 2.So here should inform subscribers when total data has been chaned.
  }

  getIngredients() {
    return this.ingredients.slice(); // 1.Because this return just a copy of data array.
  }

}
