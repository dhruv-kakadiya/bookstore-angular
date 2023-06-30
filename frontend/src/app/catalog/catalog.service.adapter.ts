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

    /* Initialize Data */
    async initializeData() {
        this.vm.isLoading = true;
        let apiString =  DJANGO_SERVER + "/api/category/get_all_categories/";
        const getAllCategories = this.http.get(apiString).toPromise();

        await Promise.all([
            getAllCategories,             // 0
        ]).then(
            (value) => {
                console.log("Response: ", value);

                this.vm.categoryList = value[0];
                for (let categoryI = 0; categoryI < this.vm.categoryList.length; categoryI++) {
                    this.vm.categoryList[categoryI].icon = DJANGO_SERVER + this.vm.categoryList[categoryI].icon;
                }
            },
            (error) => {
                console.log(error);
            }
        );

        if (!window.location.search) {
            apiString =  DJANGO_SERVER + "/api/book/search/" + window.location.search.substr(1);
            const getAllCategories = this.http.get(apiString).toPromise();

            await Promise.all([
                getAllCategories,             // 0
            ]).then(
                (value) => {
                    console.log("Response: ", value);

                    this.vm.bookList = value[0];
                    for (let bookI = 0; bookI < this.vm.bookList.length; bookI++) {
                        this.vm.bookList[bookI].image = DJANGO_SERVER + this.vm.bookList[bookI].image;
                    }
                },
                (error) => {
                    console.log(error);
                }
            );
        }
        this.vm.isLoading = false;
    }
}
