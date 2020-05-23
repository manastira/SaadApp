import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  @Input() data: any;
  all: any;
  constructor(private activeRoute: ActivatedRoute) {
    debugger;
    let rowData = this.activeRoute.snapshot.params;
    this.data = rowData.name;
  }

  ngOnInit(): void {
    debugger;
  }

}
