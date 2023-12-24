import { Component } from '@angular/core';
import {ButtonComponent} from "../button/button.component";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    ButtonComponent,
    NgForOf
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  name_list:string[] = ['Acasa', 'Contact', 'Despre', 'Login', 'Register'];
}
