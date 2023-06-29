import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-search-bar',
    templateUrl: './search-bar.component.html',
    styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
    searchString: string = "";
    examYearDefault: string = "Exam Year";
    examYear: string = this.examYearDefault;
    examYearList: string[] = ["2023", "2024", "2025"];

    constructor() { }

    ngOnInit(): void {
    }
}
