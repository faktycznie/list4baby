import { Injectable } from '@angular/core';

import { CookieService } from 'ngx-cookie-service';

import { Category } from '../models/Category';
import { Item } from '../models/Item';

import { ItemService } from './item.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private categories: Category[];
  items: Item[];

  constructor(
    private cookieService: CookieService,
    private itemService: ItemService
  ) {}

  getCategories() {
    this.categories = JSON.parse(localStorage.getItem('categories')) || [];
    if ( this.categories.length === 0
      && this.cookieService.get('list4baby') !== '0' ) {
      this.addSampleData();
    }
    return this.categories;
  }

  addSampleData(): void {
    if ( this.categories.length === 0 ) { // add sample data !
      this.addCategory({
        id: 0,
        name: 'Category',
        color: '#b8f0e7'
      });
      this.addCategory({
        id: 1,
        name: 'Another ',
        color: '#ecdada'
      });
      this.addCategory({
        id: 2,
        name: 'Example',
      });
    }
  }

  addCategory(category: Category) {
    category.id = this.getNewID(); // update ID
    this.categories.push(category);
    this.saveCategories();
  }

  removeCategory(category: Category) {
    this.categories = this.categories.filter(i => i.id !== category.id );
    this.saveCategories();
    // TODO remove categorires from items
    // this.itemService.getItems()
    // .subscribe(items => {
        // TODO remove cat from item
    // });
  }

  editCategory(category: Category) {
    const id = this.findIndex(category.id);
    this.categories[id] = category;
    this.saveCategories();
  }

  saveCategories() {
    localStorage.setItem('categories', JSON.stringify(this.categories));
  }

  findIndex(id: number): number {
    for (let i = 0; i < this.categories.length; i++) {
      if ( this.categories[i].id === id ) {
        return i;
      }
    }
    throw new Error(`Category with id ${id} was not found!`);
  }

  getNewID() {
    return ( this.categories.length ) ? this.categories[this.categories.length - 1].id + 1 : 0;
  }

  getName(id: number): string {
    for (const cat of this.categories) {
      if ( cat.id === id ) {
        return cat.name;
      }
    }
  }

  getColor(id: number): string {
    for (const cat of this.categories) {
      if ( cat.id === id ) {
        return cat.color || null;
      }
    }
  }

}
