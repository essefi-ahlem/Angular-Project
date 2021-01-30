import { Injectable } from '@angular/core';
import { Participant } from './participant';
import { PARTICIPANTSITEMS } from './participants';


@Injectable({
  providedIn: 'root'
})
export class FakeparticpantserviceService {

  constructor() { }
  get() {return PARTICIPANTSITEMS;}

  
  add(participantitem: Participant) {
    participantitem.id = PARTICIPANTSITEMS.length + 1;
    PARTICIPANTSITEMS.push(participantitem);
    }

    delete(participantitem: Participant) {
      let index;
      index = PARTICIPANTSITEMS.indexOf(participantitem);
      if (PARTICIPANTSITEMS.indexOf(participantitem) >= 0) {
      PARTICIPANTSITEMS.splice(index, 1);
      }
      }

      getParticipant(id: number) {
        return PARTICIPANTSITEMS[id - 1];
        }

        edit(participant){
          console.log("before");      
          console.log(PARTICIPANTSITEMS);
          console.log("attri")
          console.log(participant);
          PARTICIPANTSITEMS[participant.id-1].nom=participant.nom;
          PARTICIPANTSITEMS[participant.id-1].prenom=participant.prenom;
          PARTICIPANTSITEMS[participant.id-1].adresse=participant.adresse;
          PARTICIPANTSITEMS[participant.id-1].email=participant.email;
          PARTICIPANTSITEMS[participant.id-1].societe=participant.societe;
          PARTICIPANTSITEMS[participant.id-1].poste=participant.poste;

    
    
            console.log("after");      
            console.log(PARTICIPANTSITEMS);
        }    
}
