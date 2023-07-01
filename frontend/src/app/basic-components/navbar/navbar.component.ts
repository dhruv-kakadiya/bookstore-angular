import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
    constructor(
        private router: Router,
    ) { }

    // Starts: Navigate to Home
    navigateToHome(): void {
        this.router.navigate(['/']);
    }
    // Ends: navigateToHome()

    // Starts: Navigate to Cart
    navigateToCart(): void {
        this.router.navigate(['cart/']);
    }
    // Ends: navigateToCart()
}
