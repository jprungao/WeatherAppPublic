import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from '@auth0/auth0-angular';
import { LoginComponent } from 'src/views/login/login.component';

import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from 'src/views/dashboard/dashboard.component';
import { NavigationComponent } from 'src/components/navigation/navigation.component';
import { UserComponent } from 'src/components/user/user.component';
import { WeatherComponent } from 'src/components/weather-lookup/weather.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { env } from 'src/environments/env';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    NavigationComponent,
    UserComponent,
    WeatherComponent
  ],
  imports: [
    FormsModule,
    MatButtonModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatIconModule,
    HttpClientModule, MatButtonModule,
    AuthModule.forRoot({
      domain: env.authDomain,
      clientId: env.clientId,
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    }),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
