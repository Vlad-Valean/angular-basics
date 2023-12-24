import { Component } from '@angular/core';
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  no_cookies: number = 0;

  increment(): void {
    this.no_cookies++;
  }
  decrement(): void {
    this.no_cookies--;
  }

  dynamic_color = '#80669d';
  switch() {
    if(this.dynamic_color === '#80669d')
      this.dynamic_color = '#5adbb5';
    else
      this.dynamic_color = '#80669d';
  }
}
