import {Component, OnInit} from '@angular/core';
import {
    EntityType,
    TYPE_ARTIST,
    TYPE_HOME,
    TYPE_LABELS,
    TYPE_RELEASES,
    TYPE_TRACKS,
    TYPE_VENUES
} from "../common/entity-type.type";
import {StorageService} from "@services/storage.service";
import {fromEvent, Observable} from "rxjs";
import {NgxsOnChanges, NgxsSimpleChange, Store} from "@ngxs/store";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    home: EntityType = TYPE_HOME;
    artist: EntityType = TYPE_ARTIST;
    releases: EntityType = TYPE_RELEASES;
    tracks: EntityType = TYPE_TRACKS;
    labels: EntityType = TYPE_LABELS;
    venues: EntityType = TYPE_VENUES;

    activeEntityType: EntityType;

    source$: Observable<Event>;

    constructor(
        private storageService: StorageService,
        //private store: Store
    ) {
    }

    ngOnInit() {
        this.activeEntityType = this.storageService.getLocalStorageValue(StorageService.ACTIVE_ENTITY_TYPE_ITEM) ?? this.home;

        /*this.source$ = fromEvent(window, 'storage');
        this.source$.pipe().subscribe(
            data => {

            }
        )*/
    }



}
