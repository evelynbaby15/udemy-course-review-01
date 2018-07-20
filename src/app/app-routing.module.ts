import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { RecipesComponent } from './recipes/recipes.component';

const routes: Routes = [
    { path : '', redirectTo: '/recipes', pathMatch: 'full' },
    { path : 'recipes', component: RecipesComponent },
    { path : 'shopping-list', component: ShoppingListComponent}
];


@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}