import { BookComponent } from './book.component';
import { HttpClient } from '@angular/common/http';
import { DJANGO_SERVER } from 'src/app/environment/environment';


export class BookServiceAdapter {
    
    vm: any;

    constructor(
        private http: HttpClient
    ) { }

    initializeAdapter(vm: BookComponent): void {
        this.vm = vm;
    }

    // Starts: Initialize Data
    async initializeData() {
        this.vm.isLoading = true;
        let bookId = -1;

        // Starts: Get book id
        this.vm.route.queryParamMap.subscribe((params: any) => {
            if (params.hasOwnProperty('params') && params.params.hasOwnProperty('id')) {
                bookId = params.params.id;
            }
        });

        // Starts: If book id is not provided - redirect to catalog page
        if (bookId == -1) {
            this.vm.router.navigate(['catalog/']);
            this.vm.isLoading = false;
            return;
        }

        // Starts: API Call
        let apiString = DJANGO_SERVER + "/api/book/book/" + bookId;
        const getBook = this.http.get(apiString).toPromise();

        await Promise.all([
            getBook,               // 0
        ]).then(
            (value: any) => {
                console.log("Response: ", value);
                this.vm.isBookFound = true;
                this.vm.book = value[0];
                this.vm.book.image = DJANGO_SERVER + this.vm.book.image;
                this.vm.book.inCart = false;

                let cartItemList: number[] = localStorage.getItem('bookStore_cart_item_list') ? JSON.parse(localStorage.getItem('bookStore_cart_item_list') as string) : [];
                for(let cartItemI = 0; cartItemI < cartItemList.length; cartItemI++) {
                    if (this.vm.book.id == cartItemList[cartItemI]) {
                        this.vm.book.inCart = true;
                        break;
                    }
                }
            },
            (error) => {
                this.vm.isBookFound = false;
                console.log(error);
            }
        );
        this.vm.isLoading = false;
    }
    // Ends: Initialize Data
}
