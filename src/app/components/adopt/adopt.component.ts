import { Component } from '@angular/core';
import { PetCardComponent } from "../pet-card/pet-card.component";
import { NavbarComponent } from "../navbar/navbar.component";
import { Pet } from '../../../models/pet.model';
import { PetService } from '../../services/pet.service';
import { NgFor } from '@angular/common';
// import { FirebaseDataService } from './firebase-data.service';

@Component({
  selector: 'app-adopt',
  standalone: true,
  imports: [PetCardComponent, NavbarComponent,NgFor],
  templateUrl: './adopt.component.html',
  styleUrl: './adopt.component.scss'
})
export class AdoptComponent {
  petList:any[]=[]

  constructor(private petService:PetService){}

  ngOnInit(){
    this.petService.getAllPets().subscribe((data)=>{
      this.petList=data;
      console.log(this.petList)
  })
  }

}
