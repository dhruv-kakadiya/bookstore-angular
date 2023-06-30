import { Component } from '@angular/core';
import { Book } from '../common-classes/book';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css']
})
export class CartComponent {

    isLoading: boolean = false;
    bookList: any = [
        {
            brief_intro: "Hello",
            id: 1,
            image: "https://cdn0.iconfinder.com/data/icons/good-morning-1/128/read_book_cute_library_study-512.png",
            price: 500,
            releaseDate: "2022-04-11",
            short_intro: "Fantasy/Adventure",
            star: 5,
            quantity: 1,
            title: "Harry Potter and the Philosopher's stone"
        },
        {
            brief_intro: "Hello",
            id: 1,
            image: "https://cdn0.iconfinder.com/data/icons/good-morning-1/128/read_book_cute_library_study-512.png",
            price: 500,
            releaseDate: "2022-04-11",
            short_intro: "Fantasy/Adventure",
            star: 5,
            quantity: 1,
            title: "Harry Potter and the Philosopher's stone"
        },
        {
            brief_intro: "Hello",
            id: 1,
            image: "https://cdn0.iconfinder.com/data/icons/good-morning-1/128/read_book_cute_library_study-512.png",
            price: 500,
            releaseDate: "2022-04-11",
            short_intro: "Fantasy/Adventure",
            star: 5,
            quantity: 1,
            title: "Harry Potter and the Philosopher's stone"
        },
        {
            brief_intro: "Hello",
            id: 1,
            image: "https://cdn0.iconfinder.com/data/icons/good-morning-1/128/read_book_cute_library_study-512.png",
            price: 500,
            releaseDate: "2022-04-11",
            short_intro: "Fantasy/Adventure",
            star: 5,
            quantity: 1,
            title: "Harry Potter and the Philosopher's stone"
        },
    ];

    constructor() { }

    increaseQuantity(index: number) : void {
        this.bookList[index].quantity += 1;
    }

    decreaseQuantity(index: number) : void {
        this.bookList[index].quantity -= 1;
    }

    totalPrice(): number {
        let totalPrice: number = 0;
        for (let bookI = 0; bookI < this.bookList.length; bookI++) {
            totalPrice += (this.bookList[bookI].quantity * this.bookList[bookI].price);
        }
        return totalPrice;
    }
}
