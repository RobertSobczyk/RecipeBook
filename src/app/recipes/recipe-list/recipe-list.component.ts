import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    // tslint:disable-next-line:max-line-length
    new Recipe('Jajecznica', 'Danie z jajek i dodatków', 'https://img1.cookinglight.timeinc.net/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/2017/01/main/creamy-soft-scrambled-eggs.jpg?itok=UHRuIWD_'),
    // tslint:disable-next-line:max-line-length
    new Recipe('Warzywa z ryżem', 'Zdrowe i tanie danie', 'https://www.bbcgoodfood.com/sites/default/files/recipe_images/stirfrychicken_5795.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
