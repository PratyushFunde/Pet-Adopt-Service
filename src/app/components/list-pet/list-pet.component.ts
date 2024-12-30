import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { PetService } from '../../services/pet.service';

@Component({
  selector: 'app-list-pet',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './list-pet.component.html',
  styleUrl: './list-pet.component.scss'
})
export class ListPetComponent {
  selectedFile!: File;
  imageUrl!: string;
  loading:boolean=false;
  constructor(private petService:PetService){}

  onPetSubmit(form:NgForm){
    if(form.valid)
    {
      // this.onFileSelect()
      if (this.selectedFile) {
        this.petService.uploadImage(this.selectedFile).subscribe(
          {
            next:(url)=>{
              console.log("Loading...")
              this.imageUrl=url;console.log("Image uploaded successfully",this.imageUrl)
              
              console.log({...form.value,image:this.imageUrl})
              this.petService.addPet({...form.value,image:this.imageUrl})
              console.log("Added")
            },
            error:(err)=>{console.log("Error uploading Image ", err)}
          }
        );
      } else {
        alert('No file selected');
      }
    }
    else{
      alert("Fill all the fields")
    }
    // console.log(form.value)
  }
  
  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }


}


