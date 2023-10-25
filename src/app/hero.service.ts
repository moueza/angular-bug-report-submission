import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
  })
export class HeroService {
  hero=3;
  constructor() { }

 getHeroes()  {
    //this.heroes = this.heroService.getHeroes();
    return this.hero;
  }
}
