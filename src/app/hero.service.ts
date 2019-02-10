import { Injectable } from '@angular/core';

import { Hero } from './model/Hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';


import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) 
  { }

  getHeroes(): Observable<Hero[]> 
  {
    this.messageService.add(' messageService fetched heroes ');
    return of(HEROES);
  }

  getHero(id:number): Observable<Hero>
  {
     let heroesToHandle : Array<Hero>;
     this.messageService.add(' fetch ' + id);
     this.getHeroes().subscribe(heroes => {
      heroesToHandle = heroes;
     });
     
     return of(heroesToHandle.find(hero => hero.id === id));
  }


}
