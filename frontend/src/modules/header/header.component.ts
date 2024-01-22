import {Component, OnInit} from '@angular/core';
import {AppTab, TAB_ARTISTS, TAB_HOME, TAB_LABELS, TAB_RELEASES, TAB_TRACKS, TAB_VENUES} from "../../shared/app-tab.type";
import {Select, Store} from "@ngxs/store";
import {AppState} from "../../shared/app.state";
import {Observable} from "rxjs";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    activeTab: AppTab;
    @Select(AppState.getActiveTab) currentTab$: Observable<AppTab>;

    home: AppTab = TAB_HOME;
    artists: AppTab = TAB_ARTISTS;
    releases: AppTab = TAB_RELEASES;
    tracks: AppTab = TAB_TRACKS;
    labels: AppTab = TAB_LABELS;
    venues: AppTab = TAB_VENUES;

    constructor(private store: Store) {
    }

    ngOnInit() {
        this.currentTab$.subscribe(tab => {
            this.activeTab = tab;
        })
    }

    
}
