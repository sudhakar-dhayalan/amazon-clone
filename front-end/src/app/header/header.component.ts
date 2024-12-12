import { Component } from '@angular/core';
import { LogoMenuComponent } from './logo-menu/logo-menu.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [LogoMenuComponent, NavMenuComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {}
