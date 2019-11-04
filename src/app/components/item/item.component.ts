import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import { Item } from '../../models/Item';
import { Category } from '../../models/Category';

import { ItemService } from '../../services/item.service';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  item: Item;
  categories: Category[];
  @Output() toggleForm: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private itemService: ItemService,
    private categoryService: CategoryService
    ) { }

  ngOnInit() {
    this.categories = this.categoryService.getCategories(); // get categories
    this.route.paramMap.subscribe(params => {
      const id = +params.get('id');
      this.item = this.itemService.getItem(id);
    });
  }

  onEdit(): void {
    this.itemService.editItem(this.item); // save data in service
    this.router.navigate(['/items']);
  }

  goBack(): void {
    this.location.back();
  }

}
