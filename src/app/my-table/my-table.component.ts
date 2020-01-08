
import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  assignee: string;
  docs: number;
  sentences: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { assignee: 'John Doe', docs: 6, sentences: 'H'},
  { assignee: 'Michelle R', docs: 4, sentences: 'He'},
  { assignee: 'Greg Stevert', docs: 2, sentences: 'Li'}
]

@Component({
  selector: 'my-table',
  templateUrl: './my-table.component.html',
  styleUrls: ['./my-table.component.scss']
})

export class TableComponent implements OnInit {

  displayedColumns: string[] = ['assignee', 'docs', 'sentences'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

}