import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { NgClass, NgFor } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,NgFor,NgClass],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  isLoggedIn!: boolean;
  navbarOptions = [
    {name:'Home',path:'/home'},{name:'Services',path:'/services'},{name:'Adopt A Pet',path:'/adopt'},
    {name:'Give a Pet',path:'/list'}
  ];
  selectedOption: number = 0;

  constructor(private router: Router, private auth: AuthService) { }


  ngOnInit() {
    this.auth.isLoggedIn.subscribe(value=>{
      this.isLoggedIn=value;
    })
  }

  selectOption(index: number, event: Event): void {
    event.preventDefault(); // Prevent default anchor behavior
    this.selectedOption = index;
  }

  goToLoginSignUp() {
    if (!this.isLoggedIn) {
      
      this.router.navigate(['/login'])
      
    }
    if(this.isLoggedIn) {
      this.auth.onLogOut()
      this.router.navigate(['/login'])
    }
  }
}
