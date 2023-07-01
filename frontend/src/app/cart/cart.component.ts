import { Component, OnInit } from '@angular/core';
import { Book } from '../common-classes/book';
import { HttpClient } from '@angular/common/http';
import { CartServiceAdapter } from './cart.service.adapter';
import { Router } from '@angular/router';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

    isLoading: boolean = false;
    amount: number = 0;
    currency: string = "INR";
    orderId: string = "";
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

    serviceAdapter: any;

    constructor(
        private http: HttpClient,
        private router: Router,
    ) { }

    ngOnInit(): void {
        this.serviceAdapter = new CartServiceAdapter(this.http);
        this.serviceAdapter.initializeAdapter(this);
        this.serviceAdapter.initializeData();
    }

    // Starts: Increase Quantity
    increaseQuantity(index: number) : void {
        this.bookList[index].quantity += 1;
    }

    // Starts: Decrease Quantity
    decreaseQuantity(index: number) : void {
        this.bookList[index].quantity -= 1;
    }

    // Starts: Returns the total price
    totalPrice(): number {
        let totalPrice: number = 0;
        for (let bookI = 0; bookI < this.bookList.length; bookI++) {
            totalPrice += (this.bookList[bookI].quantity * this.bookList[bookI].price);
        }
        return totalPrice;
    }

    // Starts: Create Transaction Order
    createRzpayOrder(): void {
        this.amount = this.totalPrice() * 100;
        this.currency = "INR";
        this.serviceAdapter.getOrderId();
    }

    payWithRazor(order_id: any) {
        const options: any = {
            key: 'rzp_test_oGEl7xFT79Jw9i',
            amount: this.amount,
            currency: this.currency,
            name: 'BookStore', // company name or product name
            description: 'Books',  // product description
            order_id: order_id,
            modal: {
                // We should prevent closing of the form when esc key is pressed.
                escape: false,
            },
            notes: {
                // include notes if any
            },
            theme: {
                color: '#DA6365'
            }
        };

        // Starts: Verify Transactions
        options.handler = ((response: any, error: any) => {
            options.response = response;
            console.log(response);
            console.log(error);
            console.log(options);
            response['amount'] = this.amount;
            this.serviceAdapter.verifyTransaction(response);
            localStorage.setItem('bookStore_cart_item_list', JSON.stringify([]));
            alert("Your order has been placed.");
            this.router.navigate(['catalog/']);
        });

        // Starts: Cancel Transaction
        options.modal.ondismiss = (() => {
            let data = {
                order_id: this.orderId
            }
            this.serviceAdapter.cancelTransaction(data);
            console.log('Order cancelled.');
        });
        const rzp = new this.serviceAdapter.nativeWindow.Razorpay(options);
        rzp.open();
    }
}
