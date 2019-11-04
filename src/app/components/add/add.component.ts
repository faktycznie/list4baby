import { Component, OnInit, Input } from '@angular/core';
import {trigger, transition, animate, style, state} from '@angular/animations';

import { Item } from '../../models/Item';
import { Category } from '../../models/Category';

import { ItemService } from '../../services/item.service';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
  animations: [
    trigger('openClose', [
        state('open', style({
            height: '*',
            opacity: 1,
        })),
        state('closed', style({
            height: '0',
            opacity: 0
        })),
        transition('open => closed', [
            animate('0.35s')
        ]),
        transition('closed => open', [
            animate('0.35s')
        ]),
    ]),
  ]
})
export class AddComponent implements OnInit {
  items: Item[];
  name: string;
  price: number;
  shop: string;
  cat: number;
  categories: Category[];
  @Input() selectedCat: number;
  moreStatus = false;

  constructor(private itemService: ItemService, private categoryService: CategoryService) { }

  ngOnInit() {
    this.categories = this.categoryService.getCategories();
  }

  onAdd(): void {
    if ( ! this.name ) {
      return; //TODO messages!
    }
    const item: Item = {
        id: 0, // will be replaced later
        name: this.name,
        completed: false,
    };
    if ( this.cat ) {
      item.cat = this.cat;
    }
    this.itemService.addItem(item);
  }

  showMore(): void {
    this.moreStatus = !this.moreStatus;
  }

  onCatSelect( value ): void {
    this.cat = +value;
  }

}
