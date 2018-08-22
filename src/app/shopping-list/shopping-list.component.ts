import { ShoppingListService } from './shopping-list.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy{
  ingredients: Ingredient[];
  private subscription: Subscription;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    this.subscription = this.shoppingListService.ingredientChanged
    .subscribe(
      (ings: Ingredient[]) => {
        this.ingredients = ings;
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  // addIngredent(data: Ingredient) {
  //   // this.ingredients.push(data);
  //   this.shoppingListService.addIngredient(data);
  // }

  onEdit(index: number) {
    // To feed a new value to the Subject, just call next(theValue),
    // and it will be multicasted to the Observers registered to listen to the Subject.
    this.shoppingListService.startEditing.next(index);
  }

}
