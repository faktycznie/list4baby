import { Component, OnInit, KeyValueChanges, KeyValueDiffer, KeyValueDiffers, DoCheck } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { Item } from '../../models/Item';

import { ItemService } from '../../services/item.service';
import { CategoryService } from '../../services/category.service';
import { MessagesService } from '../../services/messages.service';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit, DoCheck {
    items: Item[];
    selectedItem: Item;
    name: string;
    price: number;
    shop: string;
    cat: number;
    catname: string;
    filter: number;
    totalPrice: number;
    private itemsDiffer: KeyValueDiffer<string, any>;

    constructor(
        private location: Location,
        private router: Router,
        private differs: KeyValueDiffers,
        private itemService: ItemService,
        private categoryService: CategoryService,
        private messagesService: MessagesService
    ) { }

    ngOnInit() {
        this.getItems();
        this.itemsDiffer = this.differs.find(this.items).create();

        if ( this.items.length === 0 ) {
            this.messagesService.send('No items', 'notice');
        }
    }

    ngDoCheck(): void {
        const changes = this.itemsDiffer.diff(this.items);
        if (changes) {
            /* If you want to see details then use
            changes.forEachRemovedItem((record) => ...);
            changes.forEachAddedItem((record) => ...);
            changes.forEachChangedItem((record) => ...);
            */
            //console.log(this.items);
            this.messagesService.clear(); // clear messages when items changed
            if ( this.items.length === 0 ) {
                this.messagesService.send('No items', 'notice');
            }
        }
    }

    getItems(): void {
        this.itemService.getItems()
        .subscribe(items => {
            this.items = items;
            this.totalPrice = this.itemService.getTotalPrice();
        });
    }

    onSelect(item: Item): void {
        this.selectedItem = item;
    }

    onFilter(category): void {
        this.getItems();
        this.filter = null;
        this.messagesService.clear();
        if ( typeof category === 'object' ) {
            this.filter = category.id;
            this.items = this.items.filter(i => i.cat === category.id );
            this.totalPrice = this.itemService.getTotalPrice(this.items);
            if ( this.items.length === 0 ) {
                this.messagesService.send('No items', 'notice');
            }
        }
    }

    onComplete(item: Item): void {
        item.completed = !item.completed;
        this.itemService.editItem(item); // save data
        this.totalPrice = this.itemService.getTotalPrice();
    }

    onRemove(item: Item): void {
        this.itemService.removeItem(item); // remove from data
        this.getItems(); // update items //? why is it needed?
        this.totalPrice = this.itemService.getTotalPrice();
        this.selectedItem = null;
    }

    onSearch(name: string): void {
        this.router.navigate([`products/${name}`]);
    }

    getName(id: number) {
        return this.categoryService.getName(id);
    }

    getColor(id: number) {
        return this.categoryService.getColor(id);
    }
}
