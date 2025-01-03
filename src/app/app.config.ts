import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import {AngularFireModule} from "@angular/fire/compat"
import {AngularFireAuthModule} from "@angular/fire/compat/auth"
import {AngularFireDatabaseModule} from "@angular/fire/compat/database"
import {AngularFirestoreModule} from "@angular/fire/compat/firestore"
import {AngularFireList} from "@angular/fire/compat/database"

import { routes } from './app.routes';
import { firebaseConfig } from '../environments/environment';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),importProvidersFrom([AngularFireModule.initializeApp(firebaseConfig),AngularFireAuthModule,AngularFireDatabaseModule,AngularFirestoreModule]),provideHttpClient()]
};
