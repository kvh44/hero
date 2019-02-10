import { Component, OnInit } from '@angular/core';
import { Hero } from '../model/Hero';
import { HeroService } from '../hero.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private heroSerice: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  bestHeroes: Hero[] = [];

  getHeroes() : void {
    this.heroSerice.getHeroes()
    .subscribe(heroes => {
      this.bestHeroes = heroes.slice(1);
    });
  }

}
