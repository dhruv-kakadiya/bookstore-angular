import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BasicComponentsModule } from '../basic-components/basic-components.module';
import { BookComponent } from './book.component';


@NgModule({
    declarations: [BookComponent],
    imports: [
        CommonModule,
        FormsModule,
        BasicComponentsModule,
    ],
    exports: [
        BookComponent,
    ],
    providers: [],
    entryComponents: [],
})
export class BookModule {}
