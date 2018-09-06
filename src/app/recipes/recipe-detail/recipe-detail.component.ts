import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from './../recipe.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;

  constructor(private recipS: RecipeService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    console.log('Enter recipe details comp.');
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.recipe = this.recipS.getRecipe(this.id);
      }
    );
  }

  onAddToShppingList() {
    this.recipS.addIngreToShoppingList(this.recipe.ingredients);
  }

  onEditRecipe() {
    this.router.navigate(['edit'], { relativeTo: this.route });
    // other solution:
    // this.router.navigate(['../', this.id, 'edit'], { relativeTo: this.route });
  }


  onDeleteRecipe() {
    this.recipS.deleteRecipe(this.id); // Q: why this is put id but service is put index?
    this.router.navigate(['/recipes']);
  }

}
