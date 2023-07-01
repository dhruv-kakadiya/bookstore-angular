import { Component, OnInit } from '@angular/core';
import { CatalogServiceAdapter } from './catalog.service.adapter';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../common-classes/book';
import { FRONTEND } from '../environment/environment';


@Component({
    selector: 'app-catalog',
    templateUrl: './catalog.component.html',
    styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

    isLoading: boolean = false;

    bookList: any = [
        {
            brief_intro: "Hello",
            id: 0,
            image: "https://images.moviesanywhere.com/143cdb987186a1c8f94d4f18de211216/fdea56fa-2703-47c1-8da8-70fc5382e1ea.jpg",
            price: 500,
            releaseDate: "2022-04-11",
            short_intro: "Fantasy/Adventure",
            star: 5,
            inCart: false,
            title: "Harry Potter and the Philosopher's stone"
        },
        {
            brief_intro: "Hello",
            id: 1,
            image: "https://images.moviesanywhere.com/143cdb987186a1c8f94d4f18de211216/fdea56fa-2703-47c1-8da8-70fc5382e1ea.jpg",
            price: 500,
            releaseDate: "2022-04-11",
            short_intro: "Fantasy/Adventure",
            star: 5,
            inCart: false,
            title: "Harry Potter and the Philosopher's stone"
        },
        {
            brief_intro: "Hello",
            id: 2,
            image: "https://images.moviesanywhere.com/143cdb987186a1c8f94d4f18de211216/fdea56fa-2703-47c1-8da8-70fc5382e1ea.jpg",
            price: 500,
            releaseDate: "2022-04-11",
            short_intro: "Fantasy/Adventure",
            star: 5,
            inCart: false,
            title: "Harry Potter and the Philosopher's stone"
        },
        {
            brief_intro: "Hello",
            id: 3,
            image: "https://images.moviesanywhere.com/143cdb987186a1c8f94d4f18de211216/fdea56fa-2703-47c1-8da8-70fc5382e1ea.jpg",
            price: 500,
            releaseDate: "2022-04-11",
            short_intro: "Fantasy/Adventure",
            star: 5,
            inCart: false,
            title: "Harry Potter and the Philosopher's stone"
        },
        {
            brief_intro: "Hello",
            id: 4,
            image: "https://images.moviesanywhere.com/143cdb987186a1c8f94d4f18de211216/fdea56fa-2703-47c1-8da8-70fc5382e1ea.jpg",
            price: 500,
            releaseDate: "2022-04-11",
            short_intro: "Fantasy/Adventure",
            star: 5,
            inCart: false,
            title: "Harry Potter and the Philosopher's stone"
        },
        {
            brief_intro: "Hello",
            id: 5,
            image: "https://images.moviesanywhere.com/143cdb987186a1c8f94d4f18de211216/fdea56fa-2703-47c1-8da8-70fc5382e1ea.jpg",
            price: 500,
            releaseDate: "2022-04-11",
            short_intro: "Fantasy/Adventure",
            star: 5,
            inCart: false,
            title: "Harry Potter and the Philosopher's stone"
        }
    ];

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

    // Starts: Return the floor value
    getFloorValue(n: number): number {
        return Math.floor(n);
    }

    // Starts: Check if a number is type of float or not
    isFloat(n: number): boolean {
        return (Number(n) === n && n % 1 !== 0);
    }

    // Starts: Add Item in the Cart
    addToCart(index: number): void {
        this.bookList[index].inCart = true;
        let cartItemList: number[] = localStorage.getItem('bookStore_cart_item_list') ? JSON.parse(localStorage.getItem('bookStore_cart_item_list') as string) : [];
        cartItemList.push(this.bookList[index].id);
        localStorage.setItem('bookStore_cart_item_list', JSON.stringify(cartItemList));
    }

    // Starts: Open Book
    navigateToBook(index: number): void {
        window.open(FRONTEND + '/book?id=' + this.bookList[index].id, '_blank');
    }
}
