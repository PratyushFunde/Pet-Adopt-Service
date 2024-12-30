import { Component } from '@angular/core';
import { PetCardComponent } from "../pet-card/pet-card.component";

@Component({
  selector: 'app-adopt',
  standalone: true,
  imports: [PetCardComponent],
  templateUrl: './adopt.component.html',
  styleUrl: './adopt.component.scss'
})
export class AdoptComponent {

}
