import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {AngularFireModule} from 'angularfire2';
import { appRouting } from 'app/app.routing';
import { AppComponent } from './app.component';
import { NewsComponent } from './News/news.component';
import { UrlComponent} from './Urls/url.component';
import { HomeComponent } from './Home/home.component';
import {NotFoundComponent}  from './not-found/not-found.component'
import {HeaderComponent} from './Header/header.component';
import { LoginComponent } from './login/login.component';
import { Observable } from 'rxjs/Observable';
import { environment } from '../environments/environment';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { AddTaskComponent } from './add-task/add-task.component';
import {TruncatePipe} from './News/limitFilter';
import {hiddenDirective} from './hidden.directive';
import {IfDirective} from './ngif.directive';
import { EmployeeComponent } from './employee/employee.component';
import { UserComponent } from './user/user.component';

/* Firebase Configuration */
export const firebaseConfig = {
  apiKey: "Api Key",
  authDomain: "aut domain",
  databaseURL: "someURL",
  projectId: "Project ID",
  storageBucket: "some app bucket",
  messagingSenderId: "Message ID"
}
/*Creating the Angular Module.*/
@NgModule({
declarations: [
  AppComponent,
  NewsComponent,
  UrlComponent,
  HomeComponent,
  NotFoundComponent,
  HeaderComponent,
  LoginComponent,
  AddTaskComponent,
  TruncatePipe,
  hiddenDirective,
  IfDirective,
  EmployeeComponent,
  UserComponent
],
imports: [
  BrowserModule,
  AngularFireModule.initializeApp(firebaseConfig),
  AngularFireDatabaseModule,
  AngularFireAuthModule,
  FormsModule,
  HttpModule,
  appRouting
],
providers: [],
exports:[
  hiddenDirective,
  IfDirective
],
bootstrap: [AppComponent]
})
export class AppModule { }
