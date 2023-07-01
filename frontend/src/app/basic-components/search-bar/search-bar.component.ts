import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
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
    @Input() categoryList: Category[] = [];

    minPrice: number = 0;
    maxPrice: number = 0;

    minDate: string = "";
    maxDate: string = "";

    constructor(
        private router: Router,
    ) { }

    ngOnInit(): void {
        if (!this.categoryList.length) {
            this.categoryList = [
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
        }
    }

    search(): void {
        let queryParams = {
            word: "",
            category: "",
            minPrice: 0,
            maxPrice: 0,
            minDate: "",
            maxDate: ""
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
        if (this.minPrice) {
            searchParametersProvides = true;
            queryParams.minPrice = this.minPrice;
        }
        if (this.maxPrice) {
            searchParametersProvides = true;
            queryParams.maxPrice = this.maxPrice;
        }
        if (this.minDate) {
            searchParametersProvides = true;
            queryParams.minDate = this.minDate;
        }
        if (this.maxDate) {
            searchParametersProvides = true;
            queryParams.maxDate = this.maxDate;
        }

        if (searchParametersProvides) {
            this.router.navigate(['catalog/'], { queryParams: queryParams });
        }
    }

    bookCatalog(): void {
        this.router.navigate(['catalog/']);
    }
}
