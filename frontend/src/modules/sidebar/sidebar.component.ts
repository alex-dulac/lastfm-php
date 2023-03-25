import {Component, OnInit} from '@angular/core';
import {StorageService} from "@services/storage.service";
import {
    EntityType,
    TYPE_ARTIST,
    TYPE_HOME,
    TYPE_LABELS,
    TYPE_RELEASES,
    TYPE_TRACKS, TYPE_VENUES
} from "../../common/entity-type.type";

declare interface SidebarLink {
    type: EntityType;
    title: string;
    singular?: string;
}

export const ROUTES: SidebarLink[] = [
    { type: TYPE_HOME, title: 'Home' },
    { type: TYPE_ARTIST, title: 'Artist' },
    { type: TYPE_RELEASES, title: 'Releases' },
    { type: TYPE_TRACKS, title: 'Tracks' }, // recordings
    { type: TYPE_LABELS, title: 'Labels' },
    { type: TYPE_VENUES, title: 'Venues' }, // places

];

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
    sidebarLinks: SidebarLink[];

    constructor(private storageService: StorageService) {
    }

    ngOnInit() {
        this.sidebarLinks = ROUTES.filter(sidebarLink => sidebarLink);
    }

    changeEntityType(entityType: EntityType) {
        this.storageService.setLocalStorageValue(StorageService.ACTIVE_ENTITY_TYPE_ITEM, entityType)
    }

    clearStorage(): void {
        this.storageService.clearStorage();
    }
}
