import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-logo-menu',
  standalone: true,
  imports: [NgClass],
  templateUrl: './logo-menu.component.html',
  styleUrl: './logo-menu.component.scss'
})
export class LogoMenuComponent {
  highlightSearchBar = false;
}
