import { Component,OnInit } from '@angular/core';
import { HeroService } from './hero.service';
import { DynamicTitleStrategyService } from './dynamic-title-strategy.service';//++++ .ts for provide dependency

//https://medium.com/@oranaki9910/how-to-create-a-dynamic-page-title-in-angular-28d71aa50861
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  })
export class AppComponent implements OnInit {
  title = 'titre';
 her=-99;
 constructor( private heroService: HeroService,private titrService :DynamicTitleStrategyService) { }
 ngOnInit(): void {
   this.her= this.heroService.getHeroes();
   
  }
}
