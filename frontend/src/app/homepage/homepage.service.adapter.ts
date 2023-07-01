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

    /* Starts: Initialize Data */
    async initializeData() {
        this.vm.isLoading = true;
        let apiString =  DJANGO_SERVER + "/api/category/get_all_categories/";
        const getAllCategories = this.http.get(apiString).toPromise();

        apiString =  DJANGO_SERVER + "/api/book/search/count=6";
        const getTopSixBooks = this.http.get(apiString).toPromise();

        apiString =  DJANGO_SERVER + "/api/author/get_top_three_authors/";
        const getTopThreeAuthors = this.http.get(apiString).toPromise();

        apiString =  DJANGO_SERVER + "/api/book/search/category=children&count=9";
        const getChildrenBooks = this.http.get(apiString).toPromise();

        await Promise.all([
            getAllCategories,             // 0
            getTopSixBooks,               // 1
            getTopThreeAuthors,           // 2
            getChildrenBooks,             // 3
        ]).then(
            (value: any) => {
                console.log("Response: ", value);

                if (value[0].length) {
                    this.vm.categoryList = value[0];
                    for (let categoryI = 0; categoryI < this.vm.categoryList.length; categoryI++) {
                        this.vm.categoryList[categoryI].icon = DJANGO_SERVER + this.vm.categoryList[categoryI].icon;
                    }
                }

                if (value[1].length) {
                    this.vm.topSixBookList = value[1];
                    for (let bookI = 0; bookI < this.vm.topSixBookList.length; bookI++) {
                        this.vm.topSixBookList[bookI].image = DJANGO_SERVER + this.vm.topSixBookList[bookI].image;
                    }
                }

                if (value[2].length) {
                    this.vm.authorList = value[2];
                    for (let authorI = 0; authorI < this.vm.authorList.length; authorI++) {
                        this.vm.authorList[authorI].image = DJANGO_SERVER + this.vm.authorList[authorI].image;
                    }
                }

                if (value[3].length) {
                    this.vm.childrenBookList = value[3];
                    for (let bookI = 0; bookI < this.vm.childrenBookList.length; bookI++) {
                        this.vm.childrenBookList[bookI].image = DJANGO_SERVER + this.vm.childrenBookList[bookI].image;
                    }
                }

                if (!value[1].length) {
                    alert("The data shown on home-page is dummy. So search functionality won't work. Please add data in the database to see the correct results.");
                }
            },
            (error) => {
                alert("The data shown on home-page is dummy. So search functionality won't work. Please add data in the database to see the correct results.");
                console.log("Error: ", error);
            }
        );
        this.vm.isLoading = false;
    }
}
