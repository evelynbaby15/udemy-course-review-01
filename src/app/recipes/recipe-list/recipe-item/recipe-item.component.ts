import { Recipe } from './../../recipe.model';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Output() selectedItem = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  onSelected(){
    console.log("item get show detail:");
    this.selectedItem.emit();
  }

}
