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

    /* Initialize Data */
    async initializeData() {
        this.vm.isLoading = true;
        let apiString = DJANGO_SERVER + "/api/book/search/count=6";
        const getTopSixBooks = this.http.get(apiString).toPromise();

        await Promise.all([
            getTopSixBooks,               // 0
        ]).then(
            (value: any) => {
                console.log("Response: ", value);
                this.vm.bookList = value[0];
                for (let bookI = 0; bookI < this.vm.bookList.length; bookI++) {
                    this.vm.bookList[bookI].image = DJANGO_SERVER + this.vm.bookList[bookI].image;
                    this.vm.bookList[bookI].quantity = 1;
                }
            },
            (error) => {
                console.log(error);
            }
        );
        this.vm.isLoading = false;
    }

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
                console.log(value);
                this.vm.orderId = value[0].order_id;
                this.vm.payWithRazor(value[0].order_id);
            },
            (error) => {
                console.log(error);
            }
        );
        this.vm.isLoading = false;
    }

    async verifyTransaction(response: any) {
        this.vm.isLoading = true;
        let apiString = DJANGO_SERVER + "/api/transaction/verify_txn/";
        const verifyTransaction = this.http.post(apiString, response).toPromise();

        await Promise.all([
            verifyTransaction         // 0
        ]).then(
            (value: any) => {
                console.log(value);
            },
            (error) => {
                console.log(error);
            }
        );
        this.vm.isLoading = false;
    }

    async cancelTransaction(response: any) {
        this.vm.isLoading = true;
        let apiString = DJANGO_SERVER + "/api/transaction/cancel_txn/";
        const cancelTransaction = this.http.post(apiString, response).toPromise();

        await Promise.all([
            cancelTransaction         // 0
        ]).then(
            (value: any) => {
                console.log(value);
            },
            (error) => {
                console.log(error);
            }
        );
        this.vm.isLoading = false;
    }
}
