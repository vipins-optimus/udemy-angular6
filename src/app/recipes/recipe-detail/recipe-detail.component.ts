import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Recipe } from '../recipe.moel';
import { RecipeService } from '../recipe.service';

@Component({
    selector: 'app-recipe-detail',
    templateUrl: './recipe-detail.component.html',
    styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
    recipe: Recipe;
    id: number;

    constructor(private activatedRoute: ActivatedRoute,
        private router: Router,
        private recipeService: RecipeService) {
    }

    ngOnInit() {
        this.activatedRoute.params.subscribe(
            (params: Params) => {
                this.id = +params['id'];
                this.recipe = this.recipeService.getRecipeById(this.id);
            }
        )
    }

    onAddToShoppingList() {
        this.recipeService.AddIngredientToShoppingList(this.recipe.ingredients);
    }

    onEditRecipe() {
        this.router.navigate(['edit'], { relativeTo: this.activatedRoute })
    }

}
