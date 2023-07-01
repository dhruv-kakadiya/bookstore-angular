import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { BookServiceAdapter } from './book.service.adapter';


@Component({
    selector: 'app-book',
    templateUrl: './book.component.html',
    styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

    isLoading: boolean = false;

    isBookFound: boolean = false;
    book: any = {
        brief_intro: "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente aut repellendus nemo est explicabo ipsa, facilis laborum ea saepe, quibusdam provident ut nesciunt quas dignissimos, excepturi expedita non molestiae. Corrupti quibusdam, nihil iusto facilis eius ratione odio labore perferendis facere corporis aliquid temporibus consequuntur cupiditate. Aliquid enim labore saepe quod?Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente aut repellendus nemo est explicabo ipsa, facilis laborum ea saepe, quibusdam provident ut nesciunt quas dignissimos, excepturi expedita non molestiae. Corrupti quibusdam, nihil iusto facilis eius ratione odio labore perferendis facere corporis aliquid temporibus consequuntur cupiditate. Aliquid enim labore saepe quod?Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente aut repellendus nemo est explicabo ipsa, facilis laborum ea saepe, quibusdam provident ut nesciunt quas dignissimos, excepturi expedita non molestiae. Corrupti quibusdam, nihil iusto facilis eius ratione odio labore perferendis facere corporis aliquid temporibus consequuntur cupiditate. Aliquid enim labore saepe quod?Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente aut repellendus nemo est explicabo ipsa, facilis laborum ea saepe, quibusdam provident ut nesciunt quas dignissimos, excepturi expedita non molestiae. Corrupti quibusdam, nihil iusto facilis eius ratione odio labore perferendis facere corporis aliquid temporibus consequuntur cupiditate. Aliquid enim labore saepe quod?Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente aut repellendus nemo est explicabo ipsa, facilis laborum ea saepe, quibusdam provident ut nesciunt quas dignissimos, excepturi expedita non molestiae. Corrupti quibusdam, nihil iusto facilis eius ratione odio labore perferendis facere corporis aliquid temporibus consequuntur cupiditate. Aliquid enim labore saepe quod?Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente aut repellendus nemo est explicabo ipsa, facilis laborum ea saepe, quibusdam provident ut nesciunt quas dignissimos, excepturi expedita non molestiae. Corrupti quibusdam, nihil iusto facilis eius ratione odio labore perferendis facere corporis aliquid temporibus consequuntur cupiditate. Aliquid enim labore saepe quod?Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente aut repellendus nemo est explicabo ipsa, facilis laborum ea saepe, quibusdam provident ut nesciunt quas dignissimos, excepturi expedita non molestiae. Corrupti quibusdam, nihil iusto facilis eius ratione odio labore perferendis facere corporis aliquid temporibus consequuntur cupiditate. Aliquid enim labore saepe quod?Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente aut repellendus nemo est explicabo ipsa, facilis laborum ea saepe, quibusdam provident ut nesciunt quas dignissimos, excepturi expedita non molestiae. Corrupti quibusdam, nihil iusto facilis eius ratione odio labore perferendis facere corporis aliquid temporibus consequuntur cupiditate. Aliquid enim labore saepe quod?</p>",
        id: 0,
        image: "https://images.moviesanywhere.com/143cdb987186a1c8f94d4f18de211216/fdea56fa-2703-47c1-8da8-70fc5382e1ea.jpg",
        price: 500,
        releaseDate: "2022-04-11",
        short_intro: "Fantasy/Adventure",
        star: 5,
        inCart: false,
        title: "Harry Potter and the Philosopher's stone"
    };

    serviceAdapter: any;

    constructor(
        private http: HttpClient,
        private router: Router,
        private route: ActivatedRoute,
    ) { }

    ngOnInit(): void {
        this.serviceAdapter = new BookServiceAdapter(this.http);
        this.serviceAdapter.initializeAdapter(this);
        this.serviceAdapter.initializeData();
    }

    // Starts: Return the floor value
    getFloorValue(n: number): number {
        return Math.floor(n);
    }
    // Ends: Return the floor value

    // Starts: Check if a number is type of float or not
    isFloat(n: number): boolean {
        return (Number(n) === n && n % 1 !== 0);
    }
    // Starts: Check if a number is type of float or not

    // Starts: Add Book in Cart
    addToCart(): void {
        this.book.inCart = true;
        let cartItemList: number[] = localStorage.getItem('bookStore_cart_item_list') ? JSON.parse(localStorage.getItem('bookStore_cart_item_list') as string) : [];
        cartItemList.push(this.book.id);
        localStorage.setItem('bookStore_cart_item_list', JSON.stringify(cartItemList));
    }
    // Ends: Add Book in Cart
}
