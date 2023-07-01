import { Component } from '@angular/core';
import { AuthorServiceAdapter } from './author.service.adapter';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Author } from '../common-classes/author';

@Component({
    selector: 'app-author',
    templateUrl: './author.component.html',
    styleUrls: ['./author.component.css']
})
export class AuthorComponent {
    isLoading: boolean = false;

    isAuthorFound: boolean = false;
    author: Author = new Author();

    serviceAdapter: any;

    constructor(
        private http: HttpClient,
        private router: Router,
        private route: ActivatedRoute,
    ) { }

    ngOnInit(): void {
        this.serviceAdapter = new AuthorServiceAdapter(this.http);
        this.serviceAdapter.initializeAdapter(this);
        this.serviceAdapter.initializeData();
    }

    // Starts: Returns the floor value of a number
    getFloorValue(n: number): number {
        return Math.floor(n);
    }
    // Ends: getFloorValue()

    // Starts: Checks a number is of float type or not
    isFloat(n: number): boolean {
        return (Number(n) === n && n % 1 !== 0);
    }
    // Ends: isFloat()
}
