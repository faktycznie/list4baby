import { Component, OnInit } from '@angular/core';

import { CookieService } from 'ngx-cookie-service';

import { MessagesService } from '../../services/messages.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  useSample: boolean;

  constructor(
    private cookieService: CookieService,
    private messagesService: MessagesService
  ) { }

  ngOnInit() {
    if ( this.cookieService.get('list4baby') === '0' ) {
      this.useSample = false;
    } else {
      this.useSample = true;
    }
  }

  useSampleData() {
    this.useSample = !this.useSample;
    if ( this.useSample ) { // use sample data
      this.cookieService.set('list4baby', '1');
    } else { // no sample data
      this.cookieService.set('list4baby', '0');
    }
  }

  removeData() {
    //TODO confirmation :)
    localStorage.removeItem('items');
    localStorage.removeItem('categories');
    this.messagesService.send('All data removed', 'notice');
  }

}
