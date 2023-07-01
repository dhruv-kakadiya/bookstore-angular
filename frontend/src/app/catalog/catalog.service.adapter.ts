import { CatalogComponent } from './catalog.component';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { DJANGO_SERVER } from 'src/app/environment/environment';


export class CatalogServiceAdapter {
    
    vm: any;

    constructor(
        private http: HttpClient,
    ) { }

    initializeAdapter(vm: CatalogComponent): void {
        this.vm = vm;
    }

    // Starts: Initialize Data
    async initializeData() {
        this.vm.isLoading = true;
        let apiString = "";

        // Starts: Get Searched Books
        if (window.location.search) {
            let locationStringList = window.location.search.substr(1);
            apiString =  DJANGO_SERVER + "/api/book/search/" + locationStringList;
            // let queryString = "";

            // locationStringList.forEach((item, index)=>{
            //     let [key, value] = item.split("=");
            //     value = value.trim();
            //     console.log(key, value);
            //     if (value) {
            //         if (key == "word") {
            //             queryString += ("title__icontains=" + value);
            //             queryString += ("bookauthor__author__name__icontains=" + value);
            //         } else if (key == "category") {
            //             queryString += ("bookcategory__category__name__iexact=" + value);
            //         } else if (key == "count") {
            //             queryString += ("count=" + value);
            //         }
            //     }
            // })
            // apiString =  DJANGO_SERVER + "/api/book/search/" + queryString;
        } else {
            apiString =  DJANGO_SERVER + "/api/book/search/";
        }
        const getBooks = this.http.get(apiString).toPromise();

        await Promise.all([
            getBooks,             // 0
        ]).then(
            (value: any) => {
                let cartItemList: number[] = localStorage.getItem('bookStore_cart_item_list') ? JSON.parse(localStorage.getItem('bookStore_cart_item_list') as string) : [];
                if (value[0].length) {
                    this.vm.bookList = value[0];
                    for (let bookI = 0; bookI < this.vm.bookList.length; bookI++) {
                        this.vm.bookList[bookI].image = DJANGO_SERVER + this.vm.bookList[bookI].image;
                        this.vm.bookList[bookI].inCart = false;
    
                        for(let cartItemI = 0; cartItemI < cartItemList.length; cartItemI++) {
                            if (this.vm.bookList[bookI].id == cartItemList[cartItemI]) {
                                this.vm.bookList[bookI].inCart = true;
                                break;
                            }
                        }
                    }
                }
            },
            (error) => {
                console.log(error);
            }
        );
        this.vm.isLoading = false;
        // Ends: Get Searched Books
    }
    // Ends: Initialize data
}
