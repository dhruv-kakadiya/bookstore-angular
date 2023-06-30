import { SearchBarComponent } from './search-bar.component';
import { HttpClient } from '@angular/common/http';
import { DJANGO_SERVER } from 'src/app/environment/environment';


export class SearchBarServiceAdapter {
    
    vm: any;

    constructor(
        private http: HttpClient
    ) { }

    initializeAdapter(vm: SearchBarComponent): void {
        this.vm = vm;
    }

    /* Initialize Data */
    async initializeData() {
        let apiString =  DJANGO_SERVER + "/api/category/get_all_categories/";
        const getAllCategories = this.http.get(apiString).toPromise();

        await Promise.all([
            getAllCategories,             // 0
        ]).then(
            (value) => {
                console.log("Response: ", value);
                this.vm.categoryList = value[0];
            },
            (error) => {
                console.log(error);
            }
        );
    }
}
