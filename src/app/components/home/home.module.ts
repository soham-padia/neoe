import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from "./home.component";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatMenuModule} from "@angular/material/menu";
import {MatCommonModule} from "@angular/material/core";
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MainBodyComponentComponent } from './main-body-component/main-body-component.component';
import { TopToolBarComponent } from './top-tool-bar/top-tool-bar.component';
import { SectionCardComponent } from './main-body-component/section-card/section-card.component';
import { CardComponent } from './main-body-component/section-card/card/card.component';
import {MatCardModule} from "@angular/material/card";
import {MatDividerModule} from "@angular/material/divider";
import {MatProgressBarModule} from "@angular/material/progress-bar";



@NgModule({
  declarations: [
    HomeComponent,
    NavBarComponent,
    MainBodyComponentComponent,
    TopToolBarComponent,
    SectionCardComponent,
    CardComponent,
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatSidenavModule,
    MatMenuModule,
    MatCommonModule,
    MatCardModule,
    MatDividerModule,
    MatProgressBarModule,
  ]
})
export class HomeModule { }
