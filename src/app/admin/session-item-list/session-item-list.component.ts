import { Component, OnInit } from '@angular/core';
import { FakesessionitemService } from '../fakesessionitem.service';
import { Session } from '../session';

@Component({
  selector: 'app-session-item-list',
  templateUrl: './session-item-list.component.html',
  styleUrls: ['./session-item-list.component.css']
})
export class SessionItemListComponent implements OnInit {
  sessionItems: Session[];
  constructor(private sessionItemService: FakesessionitemService) { }
  ngOnInit(): void {
    this.sessionItems= this.sessionItemService.get();
  }

}
