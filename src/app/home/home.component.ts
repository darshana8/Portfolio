import { Component } from '@angular/core';
import { MenuItem } from '../menu-item';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  menuItems: MenuItem[] = [
    {
      label: "Home",
      icon: "home",
    },
    {
      label: "About",
      icon: "help",
    },
    {
      label: "Services",
      icon: "how_to_reg",
    },
    {
      label: "Porfolio",
      icon: "person_pin",
    },
    {
      label: "Contact",
      icon: "contacts",
    },
  
  ];
}
