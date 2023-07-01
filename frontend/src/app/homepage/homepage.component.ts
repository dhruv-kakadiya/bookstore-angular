import { Component, OnInit } from '@angular/core';
import { HomepageServiceAdapter } from './homepage.service.adapter';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Category } from '../common-classes/category';
import { Book } from '../common-classes/book';
import { Author } from '../common-classes/author';
import { FRONTEND } from '../environment/environment';


@Component({
    selector: 'app-homepage',
    templateUrl: './homepage.component.html',
    styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

    isLoading: boolean = true;
    categoryList: Category[] = [
        {
            id: -1,
            icon: "./../../assets/book-icon.png",
            name: "Biography"
        },
        {
            id: -1,
            icon: "./../../assets/romance-icon.png",
            name: "Romantic"
        },
        {
            id: -1,
            icon: "./../../assets/pigy-bank.png",
            name: "Business"
        },
        {
            id: -1,
            icon: "./../../assets/cookbook-icon.png",
            name: "Cookbooks"
        },
    ];
    topSixBookList: Book[] = [
        {
            brief_intro: "Hello",
            id: 0,
            image: "https://images.moviesanywhere.com/143cdb987186a1c8f94d4f18de211216/fdea56fa-2703-47c1-8da8-70fc5382e1ea.jpg",
            price: 500,
            releaseDate: "2022-04-11",
            short_intro: "Fantasy/Adventure",
            star: 5,
            title: "Harry Potter and the Philosopher's stone"
        },
        {
            brief_intro: "Hello",
            id: 0,
            image: "https://images.moviesanywhere.com/143cdb987186a1c8f94d4f18de211216/fdea56fa-2703-47c1-8da8-70fc5382e1ea.jpg",
            price: 500,
            releaseDate: "2022-04-11",
            short_intro: "Fantasy/Adventure",
            star: 5,
            title: "Harry Potter and the Philosopher's stone"
        },
        {
            brief_intro: "Hello",
            id: 0,
            image: "https://images.moviesanywhere.com/143cdb987186a1c8f94d4f18de211216/fdea56fa-2703-47c1-8da8-70fc5382e1ea.jpg",
            price: 500,
            releaseDate: "2022-04-11",
            short_intro: "Fantasy/Adventure",
            star: 5,
            title: "Harry Potter and the Philosopher's stone"
        },
        {
            brief_intro: "Hello",
            id: 0,
            image: "https://images.moviesanywhere.com/143cdb987186a1c8f94d4f18de211216/fdea56fa-2703-47c1-8da8-70fc5382e1ea.jpg",
            price: 500,
            releaseDate: "2022-04-11",
            short_intro: "Fantasy/Adventure",
            star: 5,
            title: "Harry Potter and the Philosopher's stone"
        },
        {
            brief_intro: "Hello",
            id: 0,
            image: "https://images.moviesanywhere.com/143cdb987186a1c8f94d4f18de211216/fdea56fa-2703-47c1-8da8-70fc5382e1ea.jpg",
            price: 500,
            releaseDate: "2022-04-11",
            short_intro: "Fantasy/Adventure",
            star: 5,
            title: "Harry Potter and the Philosopher's stone"
        },
        {
            brief_intro: "Hello",
            id: 0,
            image: "https://images.moviesanywhere.com/143cdb987186a1c8f94d4f18de211216/fdea56fa-2703-47c1-8da8-70fc5382e1ea.jpg",
            price: 500,
            releaseDate: "2022-04-11",
            short_intro: "Fantasy/Adventure",
            star: 5,
            title: "Harry Potter and the Philosopher's stone"
        }
    ];
    authorList: Author[] = [
        {
            brief_intro: "Hello",
            dob: "2023-05-03",
            id: 0,
            image: "https://www.jkrowling.com/wp-content/uploads/2022/05/J.K.-Rowling-2021-Photography-Debra-Hurford-Brown-scaled.jpg",
            name: "J. K. Rowling",
            short_intro: "British author",
            star: 4.5
        },
        {
            brief_intro: "Hello",
            dob: "2023-05-03",
            id: 0,
            image: "https://www.jkrowling.com/wp-content/uploads/2022/05/J.K.-Rowling-2021-Photography-Debra-Hurford-Brown-scaled.jpg",
            name: "J. K. Rowling",
            short_intro: "British author",
            star: 4.5
        },
        {
            brief_intro: "Hello",
            dob: "2023-05-03",
            id: 0,
            image: "https://www.jkrowling.com/wp-content/uploads/2022/05/J.K.-Rowling-2021-Photography-Debra-Hurford-Brown-scaled.jpg",
            name: "J. K. Rowling",
            short_intro: "British author",
            star: 4.5
        },
    ];
    childrenBookList: Book[] = [
        {
            brief_intro: "Hello",
            id: 0,
            image: "https://images.moviesanywhere.com/143cdb987186a1c8f94d4f18de211216/fdea56fa-2703-47c1-8da8-70fc5382e1ea.jpg",
            price: 500,
            releaseDate: "2022-04-11",
            short_intro: "Fantasy/Adventure",
            star: 5,
            title: "Harry Potter and the Philosopher's stone"
        },
        {
            brief_intro: "Hello",
            id: 0,
            image: "https://images.moviesanywhere.com/143cdb987186a1c8f94d4f18de211216/fdea56fa-2703-47c1-8da8-70fc5382e1ea.jpg",
            price: 500,
            releaseDate: "2022-04-11",
            short_intro: "Fantasy/Adventure",
            star: 5,
            title: "Harry Potter and the Philosopher's stone"
        },
        {
            brief_intro: "Hello",
            id: 0,
            image: "https://images.moviesanywhere.com/143cdb987186a1c8f94d4f18de211216/fdea56fa-2703-47c1-8da8-70fc5382e1ea.jpg",
            price: 500,
            releaseDate: "2022-04-11",
            short_intro: "Fantasy/Adventure",
            star: 5,
            title: "Harry Potter and the Philosopher's stone"
        },
        {
            brief_intro: "Hello",
            id: 0,
            image: "https://images.moviesanywhere.com/143cdb987186a1c8f94d4f18de211216/fdea56fa-2703-47c1-8da8-70fc5382e1ea.jpg",
            price: 500,
            releaseDate: "2022-04-11",
            short_intro: "Fantasy/Adventure",
            star: 5,
            title: "Harry Potter and the Philosopher's stone"
        },
        {
            brief_intro: "Hello",
            id: 0,
            image: "https://images.moviesanywhere.com/143cdb987186a1c8f94d4f18de211216/fdea56fa-2703-47c1-8da8-70fc5382e1ea.jpg",
            price: 500,
            releaseDate: "2022-04-11",
            short_intro: "Fantasy/Adventure",
            star: 5,
            title: "Harry Potter and the Philosopher's stone"
        },
        {
            brief_intro: "Hello",
            id: 0,
            image: "https://images.moviesanywhere.com/143cdb987186a1c8f94d4f18de211216/fdea56fa-2703-47c1-8da8-70fc5382e1ea.jpg",
            price: 500,
            releaseDate: "2022-04-11",
            short_intro: "Fantasy/Adventure",
            star: 5,
            title: "Harry Potter and the Philosopher's stone"
        }
    ];

    serviceAdapter: any;

    constructor(
        private http: HttpClient,
        private router: Router,
    ) { }

    ngOnInit(): void {
        this.serviceAdapter = new HomepageServiceAdapter(this.http);
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

    // Starts: Get Books (By Category)
    getCategoryBooks(category: string): void {
        this.router.navigate(['catalog/'], { queryParams: {category: category} });
    }

    // Starts: Open a Book
    navigateToBook(book: any): void {
        window.open(FRONTEND + '/book?id=' + book.id, '_blank');
    }

    // Starts: Open a Author
    navigateToAuthor(author: Author): void {
        window.open(FRONTEND + '/author?id=' + author.id, '_blank');
    }
}
