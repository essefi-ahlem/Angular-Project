import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { FakeparticpantserviceService } from '../fakeparticpantservice.service';
import { Participant } from '../participant';
import {MatTable} from '@angular/material/table';
import {ViewChild} from '@angular/core';




@Component({
  selector: 'app-participants',
  templateUrl: './participants.component.html',
  styleUrls: ['./participants.component.css']
})
export class ParticipantsComponent implements OnInit {
  @ViewChild(MatTable) table: MatTable<any>;

  displayedColumns_part=['nom', 'prenom','adresse','email','societe','poste','Modifier','Supprimer'];
  dataSource_part;
  participants_data;
  test : boolean = false ;
  test_update : boolean = false ;
  participant;

 
  constructor(private fakeparticipantservice : FakeparticpantserviceService) {
    this.participants_data = this.fakeparticipantservice.get();
    this.dataSource_part = new MatTableDataSource<Participant>(this.participants_data);
   }
   editParticipant (participantsitems:any)
   { 
      console.log(participantsitems);

     this.fakeparticipantservice.add(participantsitems);
     this.test = false;
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
    this.participant=this.fakeparticipantservice.getParticipant(id);
    console.log(this.test_update);
  }

  delete(participant)
  {

    this.fakeparticipantservice.delete(participant);  }

    submit_update(participant)
    {
      this.test_update = false;
      this.fakeparticipantservice.edit(participant);
      
    }
}






