import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  //menu
  showFiller = false;
  showMenuButton = false;

  showMenu(element) {
    element.toggle();
    this.showMenuButton = true;
  }

  hideMenu(element) {
    element.toggle();
    this.showMenuButton = false;
  }

  routerLinkActiveOptions: {
    exact: boolean;
  }
}
