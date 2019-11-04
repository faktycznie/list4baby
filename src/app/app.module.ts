import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { ItemComponent } from './components/item/item.component';
import { AddComponent } from './components/add/add.component';
import { CatlistComponent } from './components/catlist/catlist.component';
import { MessagesComponent } from './components/messages/messages.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { ProductsComponent } from './components/products/products.component';

import { ColorPickerModule } from 'ngx-color-picker';
import { CookieService } from 'ngx-cookie-service';

import { PaginationComponent } from './components/pagination/pagination.component';
import { SettingsComponent } from './components/settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ItemComponent,
    AddComponent,
    CatlistComponent,
    MessagesComponent,
    CategoriesComponent,
    ProductsComponent,
    PaginationComponent,
    SettingsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ColorPickerModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
