import { AuthorComponent } from './author.component';
import { HttpClient } from '@angular/common/http';
import { DJANGO_SERVER } from 'src/app/environment/environment';


export class AuthorServiceAdapter {
    
    vm: any;

    constructor(
        private http: HttpClient
    ) { }

    initializeAdapter(vm: AuthorComponent): void {
        this.vm = vm;
    }

    // Starst: Initialize Data
    async initializeData() {
        this.vm.isLoading = true;
        let authorId = -1;

        // Start: Get Author ID
        this.vm.route.queryParamMap.subscribe((params: any) => {
            if (params.hasOwnProperty('params') && params.params.hasOwnProperty('id')) {
                authorId = params.params.id;
            }
        });

        // Starts: If Author Id is not provided - redirect to home-page
        if (authorId == -1) {
            this.vm.router.navigate(['/']);
            this.vm.isLoading = false;
            return;
        }

        // Starts: API Call
        let apiString = DJANGO_SERVER + "/api/author/author/" + authorId;
        const getAuthor = this.http.get(apiString).toPromise();

        await Promise.all([
            getAuthor,               // 0
        ]).then(
            (value: any) => {
                this.vm.isAuthorFound = true;
                this.vm.author = value[0];
                this.vm.author.image = DJANGO_SERVER + this.vm.author.image;
            },
            (error) => {
                this.vm.isAuthorFound = false;
                console.log(error);
            }
        );
        this.vm.isLoading = false;
    }
    // Ends: initializeData()
}
