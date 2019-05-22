import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Recipe } from '../recipe.moel';
import { RecipeService } from '../recipe.service';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-recipe-list',
	templateUrl: './recipe-list.component.html',
	styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
	@Output() recipeWasSelected = new EventEmitter<Recipe>();
	recipes: Recipe[] = [];
	subscription: Subscription;

	constructor(private recipeService: RecipeService,
		private activatedRoute: ActivatedRoute,
		private router: Router) { }

	ngOnInit() {
		this.subscription = this.recipeService.recipesChanged
			.subscribe(
				(recipes: Recipe[]) => {
					this.recipes = recipes;
				}
			);
		this.recipes = this.recipeService.getRecipes();
	}

	ngOnDestroy() {
		this.subscription.unsubscribe();
	}

	onNewRecipe() {
		this.router.navigate(['new'], { relativeTo: this.activatedRoute });
	}
}
