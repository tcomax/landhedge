import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalState } from '../../../global.state';

import { SearchService } from '../../../services/search.service';


@Component({
  selector: 'ba-page-top',
  templateUrl: './baPageTop.html',
  styleUrls: ['./baPageTop.scss'],
  providers: [],
  
})
export class BaPageTop {

  public isScrolled:boolean = false;
  public isMenuCollapsed:boolean = false;

  constructor(private _state:GlobalState, private searchService: SearchService, private router: Router) {
    this._state.subscribe('menu.isCollapsed', (isCollapsed) => {
      this.isMenuCollapsed = isCollapsed;
    });
  }

  public toggleMenu() {
    this.isMenuCollapsed = !this.isMenuCollapsed;
    this._state.notifyDataChanged('menu.isCollapsed', this.isMenuCollapsed);
    return false;
  } 

  public scrolledChanged(isScrolled) {
    this.isScrolled = isScrolled;
  }
  
 sendMessage(search: string): void {
     // send message to subscribers via observable subject
     this.searchService.sendMessage(search);
     //let link = ['/pages/lands'];
     //this.router.navigate(link);
     console.log('topbar-searchbox text is '.concat(search));
      // alert(search);
     
 }

 clearMessage(): void {
     // clear messagey
     this.searchService.clearMessage();
 }
}
