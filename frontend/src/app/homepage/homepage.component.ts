import { Component, OnInit } from '@angular/core';
import { HomepageServiceAdapter } from './homepage.service.adapter';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Category } from '../common-classes/category';


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
}
