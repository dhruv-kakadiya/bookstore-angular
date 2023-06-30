import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CatalogServiceAdapter } from 'src/app/catalog/catalog.service.adapter';
import { Category } from 'src/app/common-classes/category';


@Component({
    selector: 'app-search-bar',
    templateUrl: './search-bar.component.html',
    styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

    searchString: string = "";
    categoryDefault: string = "Category";
    category: string = this.categoryDefault;
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
        this.serviceAdapter = new CatalogServiceAdapter(this.http);
        this.serviceAdapter.initializeAdapter(this);
        this.serviceAdapter.initializeData();
    }

    search(): void {
        let queryParams = {
            word: "",
            category: "",
        };
        let searchParametersProvides: boolean = false;

        if (this.searchString.trim()) {
            searchParametersProvides = true;
            queryParams.word = this.searchString.toLowerCase();
        }
        if (this.category != this.categoryDefault) {
            searchParametersProvides = true;
            queryParams.category = this.category.toLowerCase();
        }

        if (searchParametersProvides) {
            this.router.navigate(['catalog/'], { queryParams: queryParams });
        }
    }
}
