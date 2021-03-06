import { Component } from '@angular/core';
import {Hero} from "./hero";
import{HeroService} from "./hero.service"
@Component({
  moduleId: module.id,
  selector: 'my-dashboard',
  // template: '<h3>My Dashboard</h3>'
  templateUrl:'dashboard.component.html',
  styleUrls:['dashboard.component.css']
})
export class DashboardComponent {
  heroes:Hero[]=[];
  constructor(private heroService:HeroService){

  }
  ngOnInit():void{
    this.heroService.getHeroes().then(heroes=>this.heroes = heroes.slice(1,5));
  }
}
