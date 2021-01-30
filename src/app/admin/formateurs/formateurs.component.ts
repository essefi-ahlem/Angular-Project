import { Component, OnInit } from '@angular/core';
import {Formateur} from '../formateur';
import {FakeformateurserviceService} from '../fakeformateurservice.service';
import {MatTableDataSource} from '@angular/material/table';
import {ViewChild} from '@angular/core';
import {MatTable} from '@angular/material/table';


@Component({
  selector: 'app-formateurs',
  templateUrl: './formateurs.component.html',
  styleUrls: ['./formateurs.component.css']
})
export class FormateursComponent implements OnInit {
   
  @ViewChild(MatTable) table: MatTable<any>;

        displayedColumns_form = ['nom', 'prenom','adresse','email','domaine','Modifier','Supprimer'];
        dataSource_form;
        formateurs_data;

        test : boolean = false ;
        test_update : boolean = false ;
        formateur;

  editCoach (formateursitems:any)
        { 
          console.log(formateursitems);
          this.FakeformateurserviceService.add(formateursitems);
          this.test = false;
        }
  constructor(private FakeformateurserviceService: FakeformateurserviceService) {

        this.formateurs_data=this.FakeformateurserviceService.get();
        this.dataSource_form = new MatTableDataSource<Formateur>(this.formateurs_data);

   }

  ngOnInit(): void {
  }
  change_test()
  {
    this.test = true;
    console.log( this.test);
  }
  refresh()
  {
    this.table.renderRows();
  }
  update(id)
  {
    this.test_update = true;
    this.formateur=this.FakeformateurserviceService.getFormateur(id);
    console.log(this.test_update);
  
    
  }
  delete(formateur)
  {
    this.FakeformateurserviceService.delete(formateur);

  }
  submit_update(formateur)
  {
    this.test_update = false;
    this.FakeformateurserviceService.edit(formateur);
    
  }
}
