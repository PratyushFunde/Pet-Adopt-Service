import { Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { LoginSignupComponent } from './components/login-signup/login-signup.component';
import { AdoptComponent } from './components/adopt/adopt.component';
import { ListPetComponent } from './components/list-pet/list-pet.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    {path:'home',component:LandingPageComponent,pathMatch:'full'},
    {path:'',component:LandingPageComponent},
    {path:'adopt',component:AdoptComponent,pathMatch:'full',canActivate: [authGuard] },
    {path:'login',component:LoginSignupComponent,pathMatch:'full'},
    {path:'list',component:ListPetComponent,pathMatch:'full',canActivate: [authGuard]},
];
