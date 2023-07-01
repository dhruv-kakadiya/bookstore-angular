import { CartComponent } from './cart.component';
import { HttpClient } from '@angular/common/http';
import { DJANGO_SERVER } from 'src/app/environment/environment';


function _window(): any {
    return window;
}

export class CartServiceAdapter {
    
    vm: any;

    constructor(
        private http: HttpClient
    ) { }

    get nativeWindow(): any {
        return _window();
    }

    initializeAdapter(vm: CartComponent): void {
        this.vm = vm;
    }

    // Starts: Initialize Data
    async initializeData() {
        this.vm.isLoading = true;
        let cartItemList: number[] = localStorage.getItem('bookStore_cart_item_list') ? JSON.parse(localStorage.getItem('bookStore_cart_item_list') as string) : [];
        let apiString = DJANGO_SERVER + "/api/book/cart/id=" + JSON.stringify(cartItemList);
        const getCartBooks = this.http.get(apiString).toPromise();

        await Promise.all([
            getCartBooks,               // 0
        ]).then(
            (value: any) => {
                if (value[0].length) {
                    this.vm.bookList = value[0];
                    for (let bookI = 0; bookI < this.vm.bookList.length; bookI++) {
                        this.vm.bookList[bookI].image = DJANGO_SERVER + this.vm.bookList[bookI].image;
                        this.vm.bookList[bookI].quantity = 1;
                    }
                }
            },
            (error) => {
                console.log(error);
            }
        );
        this.vm.isLoading = false;
    }

    // Starts: Get Transaction Order
    async getOrderId() {
        this.vm.isLoading = true;
        let apiString = DJANGO_SERVER + "/api/transaction/create_transaction/";
        let data = {
            amount: this.vm.amount,
            currency: "INR"
        };
        const postTransaction = this.http.post(apiString, data).toPromise();

        await Promise.all([
            postTransaction         // 0
        ]).then(
            (value: any) => {
                this.vm.orderId = value[0].order_id;
                this.vm.payWithRazor(value[0].order_id);
            },
            (error) => {
                console.log(error);
            }
        );
        this.vm.isLoading = false;
    }

    // Starts: Verify Transaction
    async verifyTransaction(response: any) {
        this.vm.isLoading = true;
        let apiString = DJANGO_SERVER + "/api/transaction/verify_txn/";
        const verifyTransaction = this.http.post(apiString, response).toPromise();

        await Promise.all([
            verifyTransaction         // 0
        ]).then(
            (value: any) => {
            },
            (error) => {
                console.log(error);
            }
        );
        this.vm.isLoading = false;
    }

    // Starts: Cancel Transaction
    async cancelTransaction(response: any) {
        this.vm.isLoading = true;
        let apiString = DJANGO_SERVER + "/api/transaction/cancel_txn/";
        const cancelTransaction = this.http.post(apiString, response).toPromise();

        await Promise.all([
            cancelTransaction         // 0
        ]).then(
            (value: any) => {
            },
            (error) => {
                console.log(error);
            }
        );
        this.vm.isLoading = false;
    }
}
