import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }

  messages : Array<string> = [];

 add(message : string) : void 
 {
   this.messages.push(message);
 }

 clear() : void
 {
    this.messages = [];
 }

 getMessageSize() : number
 {
   return this.messages.length;
 }
}
