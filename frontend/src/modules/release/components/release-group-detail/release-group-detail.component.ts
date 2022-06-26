import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {EncyclopediaService} from "@services/encyclopedia.service";
import {finalize} from "rxjs";

@Component({
    selector: 'app-release-group-detail',
    templateUrl: './release-group-detail.component.html',
    styleUrls: ['./release-group-detail.component.css']
})
export class ReleaseGroupDetailComponent implements OnInit {

    loading: boolean;
    errorMessage: string = 'An error has occurred. Please try again.';
    releaseSearchTerm: string;
    releaseGroupId: string;
    releaseGroup: any;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private encyclopediaService: EncyclopediaService,
    ) {
    }

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.releaseGroupId = params['releaseGroupId'];
        });

        this.route.queryParams.subscribe(queryParams => {
            if (queryParams['releaseSearchTerm']) {
                this.releaseSearchTerm = queryParams['releaseSearchTerm'];
                sessionStorage.setItem('releaseSearchTerm', this.releaseSearchTerm);

                // Remove query params so it's not displayed in the URL
                this.router.navigate([], {
                    queryParams: {
                        'releaseSearchTerm': null
                    },
                    queryParamsHandling: 'merge'
                });
            }
        });
        sessionStorage.setItem('releaseGroupId', this.releaseGroupId);
        this.getReleaseGroup(this.releaseGroupId);
    }

    getReleaseGroup(releaseGroupId: string): void {
        this.loading = true;

        this.encyclopediaService.getReleaseGroup(releaseGroupId)
            .pipe(finalize(() => this.loading = false))
            .subscribe(data => {
                console.log(data);
                this.releaseGroup = data;
            }, error => {
                this.errorMessage = error.message;
            })
    }

    back() {
        sessionStorage.setItem('releaseGroupId', '');
        this.router.navigate(['release'], {
            queryParams: {
                'releaseSearchTerm': this.releaseSearchTerm
            },
        });
    }

}
