import { HttpClient } from '@angular/common/http';
import { RecipeService } from './../recipes/recipe.service';
import { Response } from '@angular/http';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';

import { Recipe } from '../recipes/recipe.model';

@Injectable()
export class DataStorageService {

  constructor(private http: HttpClient, private rs: RecipeService) {}

  storeRecipes() {
    return this.http.put('https://banban-note.firebaseio.com/banban-note.json', this.rs.getRecipes());
  }

  fetchRecipes() {
    return this.http.get('https://banban-note.firebaseio.com/banban-note.json')
    .pipe(
      map((res: Response) => {
        const recipes: Recipe[] = res.json();
        for(const recipe of recipes) {
          if (!recipe['ingredients']) {
            console.log();
            recipe['ingredients'] = [];
          }
        }
        return recipes;
      })
    )
    .subscribe((recipes: Recipe[]) => {
      this.rs.setRecipes(recipes);
   });
   }
  

}
