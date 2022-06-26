import {Component, OnInit} from '@angular/core';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    {path: '/home', title: 'Home', icon: 'dashboard', class: ''},
    {path: '/artist', title: 'Artists', icon: 'person', class: ''},
    { path: '/release', title: 'Releases',  icon:'content_paste', class: '' },
    { path: '/track', title: 'Tracks',  icon:'library_books', class: '' }, // recordings
    { path: '/label', title: 'Labels',  icon:'library_books', class: '' },
    { path: '/venue', title: 'Venues',  icon:'library_books', class: '' }, // places

];

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
    sidebarLinks: any = [];

    constructor() {
    }

    ngOnInit() {
        this.sidebarLinks = ROUTES.filter(sidebarLink => sidebarLink);
    }

}
