import { Component, OnInit } from '@angular/core';
import { Hero } from '../model/Hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  // winstorm = 'winstorm';

  // hero : Hero = {

  //   id: 1,
  //   name: 'winstorm'

  // };

  

  

  constructor(private heroService : HeroService, private messageService : MessageService) { }

  ngOnInit() {
    this.getHeros();
  }

  heroes : Hero[];
  selectedHero: Hero;

  getHeros() : void
  {
    this.heroService.getHeroes().subscribe(heroes => {
      this.heroes = heroes;
    });
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(' select ' + hero.name);
  }

}
