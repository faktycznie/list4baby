import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Message } from '../models/Message';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  private messageSource = new BehaviorSubject({});
  currentMessage = this.messageSource.asObservable();

  constructor() {}

  send(message: string, type?: string, time?: number) {
    const msg: Message = {
      name: message
    };
    if ( type ) {
      msg.type = type;
    }
    if ( time ) {
      msg.time = time;
    }
    this.messageSource.next(msg);
    if ( time ) {
      setTimeout( () => {
        this.clear(); // clear message
      }, time * 1000 // time in seconds to miliseconds :)
      );
    }
  }

  clear() {
    this.messageSource.next({}); // clear message
  }

}
