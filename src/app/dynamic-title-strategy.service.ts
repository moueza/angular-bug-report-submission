import { Injectable } from '@angular/core';
import { RouterStateSnapshot, TitleStrategy } from '@angular/router';

import { Title } from "@angular/platform-browser";//https://medium.com/@oranaki9910/how-to-create-a-dynamic-page-title-in-angular-28d71aa50861

@Injectable({
  providedIn: 'root'
  })
export class DynamicTitleStrategyService extends TitleStrategy{
  /*https://howtojs.io/how-to-set-static-dynamic-page-titles-in-angular-14-application/*/

  /*https://medium.com/@oranaki9910/how-to-create-a-dynamic-page-title-in-angular-28d71aa50861*/
   constructor(private title: Title) { // inject the title service
    super();
  }

  override updateTitle(routerStateSnapshot: RouterStateSnapshot): void {
    //const title = this.buildTitle(routerStateSnapshot);// if you have set title in the route, you can access it like this

    //document.title = "Title Zubee"

    /*https://medium.com/@oranaki9910/how-to-create-a-dynamic-page-title-in-angular-28d71aa50861*/
     //this.title.setTitle(`App - ${title}`);
     this.title.setTitle(`isidore`);//backticks
   
  }
}
