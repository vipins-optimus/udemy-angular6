import { EventEmitter } from '@angular/core';

import { Recipe } from './recipe.moel';

export class RecipeService {
	recipeSelected = new EventEmitter<Recipe>();

	recipes: Recipe[] = [
		new Recipe('A Test Recipe', 'This is simply a test',
			'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Handi-chicken-Indian-dum-chicken-curry-recipe.jpg/800px-Handi-chicken-Indian-dum-chicken-curry-recipe.jpg'),
		new Recipe('Another Test Recipe',
			'This is simply a test',
			'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Handi-chicken-Indian-dum-chicken-curry-recipe.jpg/800px-Handi-chicken-Indian-dum-chicken-curry-recipe.jpg')
	];

	getRecipes() {
		return this.recipes.slice();
	}
}
