import { Component, OnInit, OnDestroy } from '@angular/core';

import { MessagesService } from '../../services/messages.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit, OnDestroy {
  message: object;
  constructor(
    private messagesService: MessagesService
  ) {}

  ngOnInit() {
    this.messagesService.currentMessage.subscribe(message => this.message = message);
  }

  ngOnDestroy() {
    this.messagesService.clear(); // clear messages when component loaded
  }

}
