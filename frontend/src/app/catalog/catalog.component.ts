import { Component, OnInit } from '@angular/core';
import { CatalogServiceAdapter } from './catalog.service.adapter';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../common-classes/book';


@Component({
    selector: 'app-catalog',
    templateUrl: './catalog.component.html',
    styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

    isLoading: boolean = false;
    
    bookList: Book[] = [];

    serviceAdapter: any;

    constructor(
        private http: HttpClient,
        private router: Router,
        public route: ActivatedRoute,
    ) { }

    ngOnInit(): void {
        this.serviceAdapter = new CatalogServiceAdapter(this.http);
        this.serviceAdapter.initializeAdapter(this);
        this.serviceAdapter.initializeData();
    }

    getFloorValue(n: number): number {
        return Math.floor(n);
    }

    isFloat(n: number): boolean {
        return (Number(n) === n && n % 1 !== 0);
    }
}
