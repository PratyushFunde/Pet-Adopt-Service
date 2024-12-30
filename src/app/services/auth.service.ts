import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { User } from 'firebase/auth';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private  isLoggedInSubject=new BehaviorSubject(false);

  isLoggedIn=this.isLoggedInSubject.asObservable()

  currentUser$: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);

  constructor(private afAuth:AngularFireAuth,private firestore: AngularFirestore,private router:Router) { 
    if(localStorage.getItem('accessToken'))
    {
      this.isLoggedInSubject.next(true);
    }
    else{
      
      this.isLoggedInSubject.next(false);
    }
    // Keep track of the auth state
    // this.afAuth.authState.subscribe(user => {
    //   this.currentUser$.next(user);
    // });
  }

  onLogin(email:string,password:string)
  {
    this.afAuth.signInWithEmailAndPassword(email, password)
      .then(async (userCredential) => {
        const user = userCredential.user;
        if(user)
        {

          const token = await user.getIdToken();
          if(token)
          {
            localStorage.setItem('accessToken', token); // Store token in localStorage
            console.log('Access token stored in localStorage');
            this.isLoggedInSubject.next(true)
            this.router.navigate(['/adopt'])
          }
        }
        console.log('Logged in successfully:');
      })
      .catch((error) => {
        console.error('Login failed:', error);
      });
  }

  onSignUp(email:string,password:string)
  {
    this.afAuth.createUserWithEmailAndPassword(email, password)
      .then((result) => {
        this.isLoggedInSubject.next(true);
        this.router.navigate(['/adopt']);
        console.log('User signed up successfully:', result);
      })
      .catch((error) => {
        console.error('Sign up failed:', error);
      });
  }

  onLogOut()
  {
    localStorage.removeItem('accessToken')
    this.isLoggedInSubject.next(false)
  }

}
