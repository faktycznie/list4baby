import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { CookieService } from 'ngx-cookie-service';

import { Item } from '../models/Item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private items: Item[];

  constructor(
    private cookieService: CookieService
  ) {
    //this.getItems(); //? is it needed?
  }

  getItems(): Observable<Item[]> {
    this.items = JSON.parse(localStorage.getItem('items')) || [];
    if ( this.items.length === 0
      && this.cookieService.get('list4baby') !== '0' ) {
      this.addSampleData();
    }
    return of(this.items);
  }

  getItem(id: number) {
    id = this.findIndex(id); // make sure that ID is correct
    return this.items[id];
  }

  addItem(item: Item) {
    item.id = this.getNewID(); // update ID
    this.items.unshift(item); // add at the top
    //this.items.push(item); // add at the end
    this.saveItems();
  }

  addSampleData(): void {
    if ( this.items.length === 0 ) { // add sample data
      this.addItem({
          id: 0,
          name: 'Aliquam maximus',
          cat: 1,
          price: 60,
          quantity: 2,
          completed: true
      });
      this.addItem({
          id: 1,
          name: 'Sed facilisis blandit',
          cat: 0,
          price: 28,
          quantity: 1,
          completed: false
      });
      this.addItem({
        id: 2,
        name: 'Dolor sit amet',
        cat: 0,
        price: 52,
        quantity: 1,
        completed: true
      });
      this.addItem({
        id: 3,
        name: 'Lorem ipsum',
        cat: 0,
        price: 5,
        quantity: 1,
        completed: true
      });
      this.addItem({
          id: 4,
          name: 'Another item',
          cat: 1,
          price: 31,
          quantity: 4,
          completed: false
      });
      this.addItem({
          id: 5,
          cat: 0,
          name: 'Example item',
          completed: false
      });
    }
  }

  removeItem(item: Item) {
    this.items = this.items.filter(i => i.id !== item.id );
    this.saveItems();
  }

  editItem(item: Item) {
    const id = this.findIndex(item.id);
    this.items[id] = item; // ? testing
    this.saveItems();
  }

  saveItems() {
    localStorage.setItem('items', JSON.stringify(this.items));
  }

  findIndex(id: number): number {
    for (let i = 0; i < this.items.length; i++) {
      if ( this.items[i].id === id ) {
        return i;
      }
    }
    throw new Error(`Item with id ${id} was not found!`);
  }

  getNewID() {
    //return ( this.items.length ) ? this.items[this.items.length - 1].id + 1 : 0; // if regular push
    return ( this.items.length ) ? this.items[0].id + 1 : 0; // if unshift, because the order is different
  }

  getTotalPrice( items? ): number {
    if ( !items ) {
      items = this.items;
    }
    let total = 0;
    for (const item of items) {
      if (item.price && !item.completed) {
        const q = ( item.quantity ) ? item.quantity : 1;
        total += q * +item.price;
      }
    }
    return total;
  }

}
