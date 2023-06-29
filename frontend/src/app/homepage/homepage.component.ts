import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

    searchString: string = "";
    examYearDefault: string = "Exam Year";
    examYear: string = this.examYearDefault;
    examYearList: string[] = ["2023", "2024", "2025"];

    constructor() { }

    ngOnInit(): void {
    }
}
