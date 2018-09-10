import { Subscription } from 'rxjs/Subscription';
import { Router, ActivatedRoute } from '@angular/router';
import { RecipeService } from './../recipe.service';
import { Recipe } from './../recipe.model';
import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: Recipe[];
  subscription: Subscription;
  
  ngOnDestroy(): void {
   this.subscription.unsubscribe();
  }
  

  constructor(private recipeService: RecipeService,
    private router: Router, 
    private route: ActivatedRoute) {}

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();

    // TODO : I'm not sure this?
    this.subscription = this.recipeService.recipeEventChanged.subscribe(
      (recipes: Recipe[]) => {
        this.recipes = recipes;
      }
    );
  }

  onCreateRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

}
