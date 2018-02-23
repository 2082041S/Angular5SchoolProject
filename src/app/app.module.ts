import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AuthService } from './auth.service';
import { AppComponent } from './app.component';
import {environment} from "../environments/environment";
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { CoursesComponent } from './courses/courses.component';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignupComponent } from './signup/signup.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'courses', component: CoursesComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    CoursesComponent,
    LoginPageComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
