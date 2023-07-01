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

    bookList: any;

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

    addToCart(index: number): void {
        this.bookList[index].inCart = true;
        let cartItemList: number[] = localStorage.getItem('bookStore_cart_item_list') ? JSON.parse(localStorage.getItem('bookStore_cart_item_list') as string) : [];
        cartItemList.push(this.bookList[index].id);
        localStorage.setItem('bookStore_cart_item_list', JSON.stringify(cartItemList));
    }
}
