import { Recipe } from './../recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'hambger',
      'This is big hamber',
      'https://static-communitytable.parade.com/wp-content/uploads/2017/09/low-carb-hamburger-casserole-recipes-f.jpg'),
      new Recipe(
        'hambger2',
        'This is big hamber2',
        'https://static-communitytable.parade.com/wp-content/uploads/2017/09/low-carb-hamburger-casserole-recipes-f.jpg')
    ]
  ;

  constructor() {}

  ngOnInit() {
  }

}
