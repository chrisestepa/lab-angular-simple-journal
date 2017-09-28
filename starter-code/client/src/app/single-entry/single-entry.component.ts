import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { journalEntriesService } from '../../services/journalEntries.service';

@Component({
  selector: 'app-single-entry',
  templateUrl: './single-entry.component.html',
  styleUrls: ['./single-entry.component.css']
})
export class SingleEntryComponent implements OnInit {
  element;
  constructor(
    private router:Router,
    private route:ActivatedRoute,
    private journalEntriesS : journalEntriesService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(`El parametro es ${params['id']}`);
      this.getEntryDetails(params['id']);
    })
  }

  getEntryDetails(id) {
    this.journalEntriesS.get(id)
    .subscribe( (element) => {
      this.element = element;
    });
  }

  deleteEntry () {
    if (window.confirm('Are you sure?')) {
      this.journalEntriesS.remove(this.element._id)
      .subscribe(() => {
        this.router.navigate(['']);
      });
    }
  }

}
