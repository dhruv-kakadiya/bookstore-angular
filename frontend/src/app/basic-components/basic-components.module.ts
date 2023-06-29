import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SearchBarComponent } from './search-bar/search-bar.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
    declarations: [
        SearchBarComponent,
        FooterComponent,
    ],
    entryComponents: [],
    imports: [
        CommonModule,
        FormsModule,
    ],
    exports: [
        CommonModule,
        FormsModule,
        SearchBarComponent,
        FooterComponent,
    ],
})
export class BasicComponentsModule {}
