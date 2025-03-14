import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent {

  constructor(private router: Router) {}

  navigate(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const selectedValue = selectElement.value;

    if (selectedValue) {
      this.router.navigate([selectedValue]);
    }
  }

  navigateToHome() {
    this.router.navigate(['/']);
  }

}
