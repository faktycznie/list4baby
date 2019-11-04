import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListComponent } from './components/list/list.component';
import { ItemComponent } from './components/item/item.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { ProductsComponent } from './components/products/products.component';
import { SettingsComponent } from './components/settings/settings.component';

const routes: Routes = [
  { path: 'items',        component: ListComponent },
  { path: 'item/:id', component: ItemComponent },
  { path: 'categories',   component: CategoriesComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'products/:query',   component: ProductsComponent },
  { path: 'products/:query/:page',   component: ProductsComponent },
  { path: 'settings',   component: SettingsComponent },
  { path: '',   redirectTo: '/items', pathMatch: 'full' },
  //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
