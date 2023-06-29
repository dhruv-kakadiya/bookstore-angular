import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomepageComponent } from './homepage.component';
import { BasicComponentsModule } from '../basic-components/basic-components.module';


@NgModule({
    declarations: [HomepageComponent],
    imports: [
        CommonModule,
        FormsModule,
        BasicComponentsModule,
    ],
    exports: [
        HomepageComponent,
    ],
    providers: [],
    entryComponents: [],
})
export class HomepageModule {}
