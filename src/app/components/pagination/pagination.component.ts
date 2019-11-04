import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Input() cPages: number;
  @Input() cPage: number;
  @Input() cQuery: string;
  constructor() { }

  ngOnInit() {
  }

}
