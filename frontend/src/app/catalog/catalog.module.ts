import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CatalogComponent } from './catalog.component';
import { BasicComponentsModule } from '../basic-components/basic-components.module';


@NgModule({
    declarations: [CatalogComponent],
    imports: [
        CommonModule,
        FormsModule,
        BasicComponentsModule,
    ],
    exports: [
        CatalogComponent,
    ],
    providers: [],
    entryComponents: [],
})
export class CatalogModule {}
