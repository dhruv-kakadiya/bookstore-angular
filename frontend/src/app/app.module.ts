import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { HomepageModule } from './homepage/homepage.module';
import { CatalogModule } from './catalog/catalog.module';
import { CartModule } from './cart/cart.module';
import { BookModule } from './book/book.module';
import { AuthorModule } from './author/author.module';


@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        CommonModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        
        HomepageModule,
        CatalogModule,
        CartModule,
        BookModule,
        AuthorModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
