import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }  from './app.component';

import { HeroesComponent } from './heroes.component'
import { RouterModule }   from '@angular/router'
import {DashboardComponent} from './dashboard.component'


@NgModule({
  imports:      [ BrowserModule, FormsModule ,
    RouterModule.forRoot([
      {
        path: 'heroes',
        component: HeroesComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
      {
        path: 'detail/:id',
        loadChildren: './lazy/lazy.module'
      },
    ])
  ],
  declarations: [ AppComponent, HeroesComponent,
    DashboardComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }