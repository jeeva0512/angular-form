import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import{MatListModule} from '@angular/material/list';
import { OneComponent } from './one/one.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { SolutionsComponent } from './solutions/solutions.component';
import { ServiceComponent } from './service/service.component';
import { CoursesComponent } from './courses/courses.component';
import { ContactusComponent } from './contactus/contactus.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import{MatInputModule}from '@angular/material/input';
const routes: Routes = [
  {path:'one',component:OneComponent},
  {path:'Home',component:HomeComponent},
  {path:'Aboutus',component:AboutusComponent},
  {path:'Solutions',component:SolutionsComponent},
  {path:'Service',component:ServiceComponent},
  {path:'Courses',component:CoursesComponent},
  {path:'Contactus',component:ContactusComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    OneComponent,
    HomeComponent,
    AboutusComponent,
    SolutionsComponent,
    ServiceComponent,
    CoursesComponent,
    ContactusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,MatToolbarModule,MatIconModule,MatSidenavModule,MatCardModule,MatListModule,
    RouterModule.forRoot(routes),MatFormFieldModule,MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
