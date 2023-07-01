import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BasicComponentsModule } from '../basic-components/basic-components.module';
import { CartComponent } from './cart.component';


@NgModule({
    declarations: [CartComponent],
    imports: [
        CommonModule,
        FormsModule,
        BasicComponentsModule,
    ],
    exports: [
        CartComponent,
    ],
    providers: [],
    entryComponents: [],
})
export class CartModule {}
