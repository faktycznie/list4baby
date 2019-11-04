import { Component, OnInit, KeyValueChanges, KeyValueDiffer, KeyValueDiffers, DoCheck } from '@angular/core';
import { Location } from '@angular/common';

import { Category } from '../../models/Category';

import { CategoryService } from '../../services/category.service';
import { MessagesService } from '../../services/messages.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit, DoCheck {
  name: string;
  categories: Category[];
  selectedCategory: Category;
  private catDiffer: KeyValueDiffer<string, any>;

  constructor(
    private location: Location,
    private differs: KeyValueDiffers,
    private categoryService: CategoryService,
    private messagesService: MessagesService
  ) { }

  ngOnInit() {
    this.getCategories();
    this.catDiffer = this.differs.find(this.categories).create();

    if ( this.categories.length === 0 ) {
        this.messagesService.send('No categories', 'notice');
    }
  }

  ngDoCheck(): void {
    const changes = this.catDiffer.diff(this.categories);
    if (changes) {
        /* If you want to see details then use
        changes.forEachRemovedItem((record) => ...);
        changes.forEachAddedItem((record) => ...);
        changes.forEachChangedItem((record) => ...);
        */
        //console.log(this.categories);
        this.messagesService.clear(); // clear messages when items changed
        if ( this.categories.length === 0 ) {
            this.messagesService.send('No categories', 'notice');
        }
    }
  }

  getCategories() {
    this.categories = this.categoryService.getCategories();
  }

  onAdd(): void {
    if ( !this.name ) {
      return; //TODO messages!
    }
    const category = {
        id: 0, // will be replaced later
        name: this.name,
    };
    this.categoryService.addCategory(category);
  }

  onSelect(category: Category): void {
    this.selectedCategory = category;
  }

  onEdit(category: Category): void {
    this.categoryService.editCategory(category);
    this.selectedCategory = null;
  }

  onRemove(category: Category): void {
    this.categoryService.removeCategory(category); // remove from data
    this.getCategories(); // update categories
    this.selectedCategory = null;
  }

  goBack(): void {
    this.selectedCategory = null;
  }

}
