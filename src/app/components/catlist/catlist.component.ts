import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Category } from '../../models/Category';

import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-catlist',
  templateUrl: './catlist.component.html',
  styleUrls: ['./catlist.component.scss']
})
export class CatlistComponent implements OnInit {
  categories: Category[];
  @Output() filterList: EventEmitter<object> = new EventEmitter<object>();
  @Input() total: number;
  selected: number;

  constructor(
    private categoryService: CategoryService
    ) { }

  ngOnInit() {
    this.categories = this.categoryService.getCategories();
  }

  onSelect( category ): void {
    if ( !category ) {
      category = true;
      this.selected = null;
    } else {
      this.selected = category.id;
    }
    this.filterList.emit(category);
  }

}
