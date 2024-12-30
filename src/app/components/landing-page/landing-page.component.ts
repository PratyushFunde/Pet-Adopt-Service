import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { ImgTemplateComponent } from "../img-template/img-template.component";

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [ImgTemplateComponent, NavbarComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

}
