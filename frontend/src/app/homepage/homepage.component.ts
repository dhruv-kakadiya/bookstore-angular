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
            id: 0,
            icon: "https://cdn0.iconfinder.com/data/icons/good-morning-1/128/read_book_cute_library_study-512.png",
            name: "Biography"
        },
        {
            id: 1,
            icon: "https://cdn0.iconfinder.com/data/icons/good-morning-1/128/read_book_cute_library_study-512.png",
            name: "Romantic"
        },
        {
            id: 0,
            icon: "https://cdn0.iconfinder.com/data/icons/good-morning-1/128/read_book_cute_library_study-512.png",
            name: "Business"
        },
        {
            id: 0,
            icon: "https://cdn0.iconfinder.com/data/icons/good-morning-1/128/read_book_cute_library_study-512.png",
            name: "Cookbooks"
        },
    ];
    topSixBookList: Book[] = [
        {
            brief_intro: "Hello",
            id: 1,
            image: "https://cdn0.iconfinder.com/data/icons/good-morning-1/128/read_book_cute_library_study-512.png",
            price: 500,
            releaseDate: "2022-04-11",
            short_intro: "Fantasy/Adventure",
            star: 5,
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
            title: "Harry Potter and the Philosopher's stone"
        },
    ];
    authorList: Author[] = [
        {
            brief_intro: "Hello",
            dob: "2023-05-03",
            id: 2,
            image: "https://cdn0.iconfinder.com/data/icons/good-morning-1/128/read_book_cute_library_study-512.png",
            name: "Arundhati Roy Indian author",
            short_intro: "Indian Author, Most Famous Indian Author",
            star: 5
        },
        {
            brief_intro: "Hello",
            dob: "2023-05-03",
            id: 2,
            image: "https://cdn0.iconfinder.com/data/icons/good-morning-1/128/read_book_cute_library_study-512.png",
            name: "Arundhati Roy Indian author",
            short_intro: "Indian Author, Most Famous Indian Author",
            star: 5
        },
        {
            brief_intro: "Hello",
            dob: "2023-05-03",
            id: 2,
            image: "https://cdn0.iconfinder.com/data/icons/good-morning-1/128/read_book_cute_library_study-512.png",
            name: "Arundhati Roy Indian author",
            short_intro: "Indian Author, Most Famous Indian Author",
            star: 5
        }
    ];
    childrenBookList: Book[] = [
        {
            brief_intro: "Hello",
            id: 1,
            image: "https://cdn0.iconfinder.com/data/icons/good-morning-1/128/read_book_cute_library_study-512.png",
            price: 500,
            releaseDate: "2022-04-11",
            short_intro: "Fantasy/Adventure",
            star: 5,
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
            title: "Harry Potter and the Philosopher's stone"
        },{
            brief_intro: "Hello",
            id: 1,
            image: "https://cdn0.iconfinder.com/data/icons/good-morning-1/128/read_book_cute_library_study-512.png",
            price: 500,
            releaseDate: "2022-04-11",
            short_intro: "Fantasy/Adventure",
            star: 5,
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
            title: "Harry Potter and the Philosopher's stone"
        },
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

    getFloorValue(n: number): number {
        return Math.floor(n);
    }

    isFloat(n: number): boolean {
        return (Number(n) === n && n % 1 !== 0);
    }

    getCategoryBooks(category: string): void {
        this.router.navigate(['catalog/'], { queryParams: {category: category} });
    }

    navigateToBook(book: any): void {
        window.open(FRONTEND + '/book?id=' + book.id, '_blank');
    }
}
