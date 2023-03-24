import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    currentArtistId: string;

    constructor() {
    }

    ngOnInit(): void {
        if (sessionStorage.getItem('artistId')) {
            this.currentArtistId = sessionStorage.getItem('artistId');
        }
    }

}
