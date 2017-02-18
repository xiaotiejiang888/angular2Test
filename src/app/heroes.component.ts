import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import {Hero} from "./hero";
import{HeroService} from "./hero.service"
import {Router} from "@angular/router";
@Component({
  selector: 'my-heroes',//不能随便改
  // styleUrls: ['./app.component.css'],
  templateUrl:"heros.component.html",
  styleUrls:['heros.component.css'],
  providers: []
  })
export class HeroesComponent implements OnInit {
  ngOnInit(): void {
    this.getHeroes()
  }

  heroes :Hero[];
  // hero:Hero = {
  //   id:1,
  //   name:'Windstorm'
  // };
  selectedHero: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  constructor(
    private heroService: HeroService,
    private router:Router
  ) { }
  getHeroes(): void {
    // this.heroes = this.heroService.getHeroes();
    this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes)
  }
  gotoDetail():void{
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}
