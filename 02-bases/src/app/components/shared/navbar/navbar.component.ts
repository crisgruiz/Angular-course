import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

// create component using ng g component mycomponent --skip-import

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  imports: [RouterLink, RouterLinkActive],
})
export class NavbarComponent {}
