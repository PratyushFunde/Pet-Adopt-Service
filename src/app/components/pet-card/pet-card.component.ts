import { Component, Input } from '@angular/core';
import { Pet } from '../../../models/pet.model';

@Component({
  selector: 'app-pet-card',
  standalone: true,
  imports: [],
  templateUrl: './pet-card.component.html',
  styleUrl: './pet-card.component.scss'
})
export class PetCardComponent {
  @Input()pet:any;

  ngOnInit()
  {
    console.log(this.pet)
  }

}
