import { Component, OnInit } from '@angular/core';

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}

export const ROUTES: RouteInfo[] = [
  { path: '/home', title: 'Home',  icon: 'dashboard', class: '' },
  { path: '/artist', title: 'Artist',  icon:'person', class: '' },
  { path: '/album', title: 'Album',  icon:'content_paste', class: '' },
  //{ path: '/charts', title: 'Charts',  icon:'library_books', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  sidebarLinks: any = [];

  constructor() { }

  ngOnInit() {
    this.sidebarLinks = ROUTES.filter(sidebarLink => sidebarLink);
  }

}
