import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Select} from "@ngxs/store";
import {AppState} from "../../shared/app.state";
import {Observable} from "rxjs";
import {AppTab} from "../../shared/app-tab.type";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    @Select(AppState.getArtistId) currentArtistId$: Observable<string>;
    activeArtistId: string;

    constructor() {
    }

    ngOnInit(): void {
        this.currentArtistId$.subscribe(data => {
            this.activeArtistId = data;
        })
    }

}
