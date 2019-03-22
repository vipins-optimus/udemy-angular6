import { Injectable } from '@angular/core';

import { Recipe } from './recipe.moel';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

	constructor(private shoppingListService:ShoppingListService) {
		
	}

	recipes: Recipe[] = [
		new Recipe('A Test Recipe',
			'This is simply a test',
			'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
			[
				new Ingredient('Meat', 1),
				new Ingredient('French Fries', 20)
			]),
		new Recipe('Another Test Recipe',
			'This is simply a test',
			'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Handi-chicken-Indian-dum-chicken-curry-recipe.jpg/800px-Handi-chicken-Indian-dum-chicken-curry-recipe.jpg',
			[
				new Ingredient('Meat', 1),
				new Ingredient('French Fries', 20)
			])
	];

	getRecipes() {
		return this.recipes.slice();
	}

	getRecipeById(index: number) {
		return this.recipes[index];
	}

	AddIngredientToShoppingList(ingredients: Ingredient[]) {
		this.shoppingListService.addIngredients(ingredients);
	}
}
