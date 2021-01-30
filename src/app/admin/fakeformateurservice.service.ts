
import { Injectable } from '@angular/core';
import { Formateur } from './formateur';
import { FORMATEURITEMS } from './formateurs';

@Injectable({
  providedIn: 'root'
})
export class FakeformateurserviceService {

  constructor() { }
  get() {return FORMATEURITEMS;}
  add(formateurItem: Formateur) {
    formateurItem.id = FORMATEURITEMS.length + 1;
    FORMATEURITEMS.push(formateurItem);
    }

    delete(formateurItem: Formateur) {
      let index;
      index = FORMATEURITEMS.indexOf(formateurItem);
      if (FORMATEURITEMS.indexOf(formateurItem) >= 0) {
      FORMATEURITEMS.splice(index, 1);
      }
      }

      getFormateur(id: number) {
        return FORMATEURITEMS[id - 1];
        }
        edit(formateur){
          console.log("before");      
          console.log(FORMATEURITEMS);
          console.log("attri")
          console.log(formateur);
          FORMATEURITEMS[formateur.id-1].nom=formateur.nom;
          FORMATEURITEMS[formateur.id-1].prenom=formateur.prenom;
          FORMATEURITEMS[formateur.id-1].adresse=formateur.adresse;
          FORMATEURITEMS[formateur.id-1].email=formateur.email;
          FORMATEURITEMS[formateur.id-1].domaine=formateur.domaine;
    
    
            console.log("after");      
            console.log(FORMATEURITEMS);
        }    
}
