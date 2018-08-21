import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ShoppingListService {

  ingredientChanged = new Subject<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Oriange', 10)
  ];

  constructor() { }

  addIngredient(data: Ingredient) {
    this.ingredients.push(data);
    this.ingredientChanged.next(this.ingredients.slice()); // 2.So here should inform subscribers when total data has been chaned.
  }

  getIngredients() {
    return this.ingredients.slice(); // 1.Because this return just a copy of data array.
  }

  addIngredients(ings: Ingredient[]) {
    // You can also use the following for loop way for adding ingredrient, but it's too ...
    //  for (let ingre of ings) {
    //    this.addIngredient(ingre);
    // }
    // 07/05 Q: what is this grammer? A: This is an ES6 feature. (spread operator)
    // Turn an array elements into a list elements, because push can handle a list object.
    this.ingredients.push(...ings);
    this.ingredientChanged.next(this.ingredients.slice());
  }
}
