import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideAnalytics,getAnalytics,ScreenTrackingService,UserTrackingService } from '@angular/fire/analytics';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import {MateialModule} from './shared/mateial.module'

import {MatCommonModule} from "@angular/material/core";
import {MatMenuModule} from "@angular/material/menu";
import { PostFormComponent } from './components/post-form/post-form.component';
import {MatDialog, MatDialogModule} from "@angular/material/dialog";
import {MatRadioModule} from "@angular/material/radio";
import { PostComponent } from './components/post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    PostFormComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MateialModule,
    MatCommonModule,
    MatMenuModule,
    MatDialogModule,
    MatRadioModule,

  ],
  providers: [
    ScreenTrackingService,UserTrackingService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
