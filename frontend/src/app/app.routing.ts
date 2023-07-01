import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { CatalogComponent } from './catalog/catalog.component';
import { CartComponent } from './cart/cart.component';
import { BookComponent } from './book/book.component';
import { AuthorComponent } from './author/author.component';


const routes: Routes = [
    { path: '', component: HomepageComponent },
    { path: 'catalog', component: CatalogComponent },
    { path: 'cart', component: CartComponent },
    { path: 'book', component: BookComponent },
    { path: 'author', component: AuthorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
