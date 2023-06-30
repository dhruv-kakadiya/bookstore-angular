import { HomepageComponent } from './homepage.component';
import { HttpClient } from '@angular/common/http';
import { DJANGO_SERVER } from 'src/app/environment/environment';


export class HomepageServiceAdapter {
    
    vm: any;

    constructor(
        private http: HttpClient
    ) { }

    initializeAdapter(vm: HomepageComponent): void {
        this.vm = vm;
    }

    /* Initialize Data */
    async initializeData() {
        this.vm.isLoading = true;
        let apiString =  DJANGO_SERVER + "/api/category/get_all_categories/";
        const getAllCategories = this.http.get(apiString).toPromise();

        apiString =  DJANGO_SERVER + "/api/book/get_top_six_books/";
        const getTopSixBooks = this.http.get(apiString).toPromise();

        apiString =  DJANGO_SERVER + "/api/author/get_top_three_authors/";
        const getTopThreeAuthors = this.http.get(apiString).toPromise();

        await Promise.all([
            getAllCategories,             // 0
            getTopSixBooks,               // 1
            getTopThreeAuthors,           // 2
        ]).then(
            (value) => {
                console.log("Response: ", value);

                this.vm.categoryList = value[0];
                for (let categoryI = 0; categoryI < this.vm.categoryList.length; categoryI++) {
                    this.vm.categoryList[categoryI].icon = DJANGO_SERVER + this.vm.categoryList[categoryI].icon;
                }

                this.vm.bookList = value[1];
                for (let bookI = 0; bookI < this.vm.bookList.length; bookI++) {
                    this.vm.bookList[bookI].image = DJANGO_SERVER + this.vm.bookList[bookI].image;
                }

                this.vm.authorList = value[2];
                for (let authorI = 0; authorI < this.vm.authorList.length; authorI++) {
                    this.vm.authorList[authorI].image = DJANGO_SERVER + this.vm.authorList[authorI].image;
                }
            },
            (error) => {
                console.log(error);
            }
        );
        this.vm.isLoading = false;
    }

    // async getOrderId() {
    //     this.vm.isLoading = true;
    //     let apiString = DJANGO_SERVER + "/api/payment/create_transaction/";
    //     let data = {
    //         amount: this.vm.amount,
    //         plan_id: this.vm.plan_id,
    //         currency: "INR"
    //     };
    //     const postTransaction = this.http.post(apiString, data).toPromise();

    //     await Promise.all([
    //         postTransaction         // 0
    //     ]).then(
    //         (value: any) => {
    //             console.log(value);
    //             this.vm.orderId = value[0].order_id;
    //             this.vm.payWithRazor(value[0].order_id);
    //         },
    //         (error) => {
    //             console.log(error);
    //         }
    //     );
    //     this.vm.isLoading = false;
    // }

    // async verifyTransaction(response: any) {
    //     this.vm.isLoading = true;
    //     let apiString = DJANGO_SERVER + "/api/payment/verify_txn/";
    //     const verifyTransaction = this.http.post(apiString, response).toPromise();

    //     await Promise.all([
    //         verifyTransaction         // 0
    //     ]).then(
    //         (value: any) => {
    //             console.log(value);
    //         },
    //         (error) => {
    //             console.log(error);
    //         }
    //     );
    //     this.vm.isLoading = false;
    // }

    // async cancelTransaction(response: any) {
    //     this.vm.isLoading = true;
    //     let apiString = DJANGO_SERVER + "/api/payment/cancel_txn/";
    //     const cancelTransaction = this.http.post(apiString, response).toPromise();

    //     await Promise.all([
    //         cancelTransaction         // 0
    //     ]).then(
    //         (value: any) => {
    //             console.log(value);
    //         },
    //         (error) => {
    //             console.log(error);
    //         }
    //     );
    //     this.vm.isLoading = false;
    // }
}
