import { BrowserModule } from '@angular/platform-browser';
import { Component, NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { InscriptionDisabledDirective } from './inscription-disabled.directive';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import { FormateursComponent } from './admin/formateurs/formateurs.component';
import { AddFormateurComponent } from './admin/add-formateur/add-formateur.component';
import { ParticipantsComponent } from './admin/participants/participants.component';
const appRoutes : Routes = [
  {path:'',
  component : DashboardComponent
},
  
  {path :'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path :'dashboard',
    component : DashboardComponent
  },
  {path :'formateurs',
  component : FormateursComponent
  },
  {
    path :'Participants',
    component:ParticipantsComponent
  },
  {
  path :'formateurs/add-form',
  component : AddFormateurComponent
  },
  {
     path: '**', 
     component: PagenotfoundComponent 
  },
 
]
@NgModule({
  declarations: [
    InscriptionDisabledDirective,
    PagenotfoundComponent,
    AppComponent,
    DashboardComponent,
    FormateursComponent,
    ParticipantsComponent
  ],
  imports: [RouterModule.forRoot(appRoutes,{enableTracing : true}),
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
