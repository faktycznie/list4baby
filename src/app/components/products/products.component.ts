import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { ProductsService } from '../../services/products.service';
import { MessagesService } from '../../services/messages.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: any;
  total: number;
  pages: number;
  page: number;
  query: string;
  queryInput: string;
  queryURI: string;
  start: number;
  loader = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productsService: ProductsService,
    private messagesService: MessagesService
    ) {  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const page = ( params.get('page') ) ? +params.get('page') : null;
      const query = ( params.get('query') ) ? decodeURI(params.get('query')) : null;
      this.getProducts(query, page);
    });
  }

  getProducts(query: string, page: number): void {
    this.loader = true;
    this.page = ( page ) ? page : 1;
    this.query = ( query ) ? query : 'for babies'; // default search query

    this.queryInput = this.query;
    this.queryURI = encodeURI(this.query);
    this.start = ( this.page > 1 ) ? ((this.page - 1) * 10) + 1 : this.page;

    // clear previous results
    //this.pages = null;
    this.products = null;
    this.messagesService.clear();

    this.productsService.getProducts(this.query, this.start).subscribe(
      (data: object) => {
        this.setData(data);
      },
      (err) => {
        if ( err.status == 403 ) {
          this.messagesService.send('API requests daily limit exceeded! ' + err.error.error.message, 'error');
        } else {
          this.messagesService.send(err.message, 'error');
        }
      }
      );
  }

  setData( data ): void {
    this.loader = false;
    if ( data.searchInformation.totalResults > 0 ) {
      this.products = data.items;
      this.total = data.searchInformation.formattedTotalResults;
      this.pages = ( data.searchInformation.totalResults > 100 ) ? 10 : data.searchInformation.totalResults / 10; // free API limits
    } else {
      this.total = 0;
      this.pages = null;
      this.products = null; // hide previous results
      this.messagesService.send('No results, sorry !');
    }
  }

}
