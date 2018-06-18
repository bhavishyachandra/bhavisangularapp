import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  messages: string[];
  constructor() {
    this.messages = ['test', 'message'];
  }

  add(message: string): void {
    this.messages.push(message);
  }

  getMessages(): Observable<string[]> {
    return of(this.messages);
  }
}
