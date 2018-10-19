import { SigninComponent } from './auth/signin/signin.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { SignupComponent } from './auth/signup/signup.component';

const routes: Routes = [
    { path : '', redirectTo: '/recipes', pathMatch: 'full' },
    { path : 'signup', component: SignupComponent},
    { path : 'signin', component: SigninComponent},
    { path : 'shopping-list', component: ShoppingListComponent}
];


@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}
