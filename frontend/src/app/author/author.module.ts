import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BasicComponentsModule } from '../basic-components/basic-components.module';
import { AuthorComponent } from './author.component';


@NgModule({
    declarations: [AuthorComponent],
    imports: [
        CommonModule,
        FormsModule,
        BasicComponentsModule,
    ],
    exports: [
        AuthorComponent,
    ],
    providers: [],
    entryComponents: [],
})
export class AuthorModule {}
