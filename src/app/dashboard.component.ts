import { Component, OnInit } from '@angular/core';
import { HeroService } from './hero.service';
import { Hero } from './hero'
import './dashboard.component.css'

@Component({
  selector: 'my-dashboard',
  providers: [HeroService],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  heroes: Hero[];
  constructor(private heroService:HeroService){

  }
  ngOnInit(){
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(1, 5));
  }
}