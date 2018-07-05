import { ShoppingListService } from './shopping-list.service';
import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[];

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    this.shoppingListService.ingredientChanged
    .subscribe(
      (ings: Ingredient[]) => {
        this.ingredients = ings;
      }
    );
  }

  // addIngredent(data: Ingredient) {
  //   // this.ingredients.push(data);
  //   this.shoppingListService.addIngredient(data);
  // }

}
