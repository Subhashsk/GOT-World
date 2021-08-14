import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from "@angular/common/http";
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { GameHttpService } from './game-http.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    //routerModule forRoot method to declare the possible routes in application
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent},
      {path: '', redirectTo:'home', pathMatch:'full'},
      {path: 'details', component: DetailsComponent},
      {path:'books', component:HomeComponent},
      {path:'houses', component: HomeComponent}, 
      {path:'characters', component: HomeComponent},
      {path:'books/:bookId',component:DetailsComponent},
      {path:'characters/:characterId',component:DetailsComponent},
      {path:'houses/:houseId',component:DetailsComponent},
      {path: '**', redirectTo: 'home'},

    ], {useHash:true})
  ],
  providers: [GameHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
