import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';

declare interface RouteInfo {
    path: string;
    title: string;
    singular?: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/home', title: 'Home' },
    { path: '/artist', title: 'Artists' , singular: 'artist'},
    { path: '/release', title: 'Releases', singular: 'release' },
    { path: '/track', title: 'Tracks', singular: 'track'}, // recordings
    { path: '/label', title: 'Labels', singular: 'label' },
    { path: '/venue', title: 'Venues', singular: 'venue' }, // places

];

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
    sidebarLinks: RouteInfo[];

    constructor() {
    }

    ngOnInit() {
        this.sidebarLinks = ROUTES.filter(sidebarLink => sidebarLink);
    }


}
