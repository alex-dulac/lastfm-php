import {Component, OnInit} from '@angular/core';
import {StorageService} from "@services/storage.service";

@Component({
    selector: 'app-release',
    templateUrl: './release.component.html',
    styleUrls: ['./release.component.css']
})
export class ReleaseComponent implements OnInit {

    releaseGroupId: string;

    constructor(private storageService: StorageService) {
    }

    ngOnInit() {
        this.releaseGroupId = this.storageService.getLocalStorageValue(StorageService.RELEASE_GROUP_ID_ITEM);
        if (this.releaseGroupId) {

        }
    }

}
