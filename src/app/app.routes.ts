import { Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { LoginSignupComponent } from './components/login-signup/login-signup.component';
import { AdoptComponent } from './components/adopt/adopt.component';
import { ListPetComponent } from './components/list-pet/list-pet.component';

export const routes: Routes = [
    {path:'home',component:LandingPageComponent},
    {path:'',component:LoginSignupComponent},
    {path:'adopt',component:AdoptComponent},
    {path:'login',component:LoginSignupComponent},
    {path:'list',component:ListPetComponent},
];
