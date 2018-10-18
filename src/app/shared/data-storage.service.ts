import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx';

import { RecipeService } from './../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { AuthService } from './../auth/auth.service';


@Injectable()
export class DataStorageService {

  constructor(private http: HttpClient,
              private rs: RecipeService,
              private authService: AuthService) {}

  storeRecipes() {
    const tk = this.authService.getToken();
    return this.http.put('https://banban-note.firebaseio.com/banban-note.json?auth=' + tk, this.rs.getRecipes());
  }

  fetchRecipes() {
    const tk = this.authService.getToken();

    return this.http.get<Recipe[]>('https://banban-note.firebaseio.com/banban-note.json?auth=' + tk)
    .map(
      (recipes) => {
        for (const recipe of recipes) {
          if (!recipe['ingredients']) {
            recipe['ingredients'] = [];
          }
        }
        return recipes;
      }
    )
    .subscribe((recipes: Recipe[]) => {
      this.rs.setRecipes(recipes);
   });
   }
}
