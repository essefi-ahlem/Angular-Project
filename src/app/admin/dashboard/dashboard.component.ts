import { Component, OnInit } from '@angular/core';
import { FakesessionitemService } from '../fakesessionitem.service';
import { FakeparticpantserviceService } from '../fakeparticpantservice.service';
import {MatTableDataSource} from '@angular/material/table';
import {FakeformateurserviceService} from '../fakeformateurservice.service';
import {Formateur} from '../formateur';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  displayedColumns = ['Track', 'Nb Sessions'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);

  displayedColumns_form = ['nom', 'prenom'];
  dataSource_form;

 /* bogusDataSource = new MatTableDataSource<Element>(null);*/
  sessions_data;
  participants_data;
  formateurs_data;
  constructor(private sessionItemService: FakesessionitemService
    ,private FakeparticpantserviceService: FakeparticpantserviceService,
    private FakeformateurserviceService: FakeformateurserviceService) {

      this.sessions_data=this.sessionItemService.get();
      this.participants_data=this.FakeparticpantserviceService.get();
      this.formateurs_data=this.FakeformateurserviceService.get();
      this.dataSource_form = new MatTableDataSource<Formateur>(this.formateurs_data);
      console.log(this.sessions_data);
      console.log(this.participants_data);
      console.log(this.formateurs_data);

   }

  ngOnInit(): void {
  }

}
export class Element {
  constructor (  
    public track: string,
    public nb: number
    ){}
}
const ELEMENT_DATA: Element[] = [
  { track: 'MEAN Stack', nb: 2},
  { track: 'Android', nb: 2},
  { track: 'Ionic', nb: 1},
  { track: 'Angular', nb: 0},
  { track: 'NodeJS', nb: 0},
  { track: 'Xamarin', nb: 0},
];
