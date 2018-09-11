import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.moel';

@Component({
	selector: 'app-recipe-list',
	templateUrl: './recipe-list.component.html',
	styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
	recipes: Recipe[] = [
		new Recipe('A Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Handi-chicken-Indian-dum-chicken-curry-recipe.jpg/800px-Handi-chicken-Indian-dum-chicken-curry-recipe.jpg'),
		new Recipe('A Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Handi-chicken-Indian-dum-chicken-curry-recipe.jpg/800px-Handi-chicken-Indian-dum-chicken-curry-recipe.jpg')
	];

	constructor() { }

	ngOnInit() {
	}

}
