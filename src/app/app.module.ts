import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { SplashComponent } from './splash/splash.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { AppRoutingModule } from './app-routing.module';
import { SigninComponent } from './signin/signin.component';
import { FooterComponent } from './footer/footer.component';
import { OwnerListComponent } from './listowners/listowners.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    SplashComponent,
    LoginComponent,
    ProfileComponent, 
    SigninComponent,
    HttpClientModule,
    CommonModule,
    FooterComponent,
    OwnerListComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
