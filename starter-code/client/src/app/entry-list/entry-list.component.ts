import { Component, OnInit } from '@angular/core';
import { journalEntriesService } from '../../services/journalEntries.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent implements OnInit {
element: any;
  constructor(public journalEntriesS : journalEntriesService) { }

  ngOnInit() {
    this.journalEntriesS.getList()
    .subscribe((element) => this.element = element);
  }


}
