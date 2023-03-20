import {Component, Input, OnInit} from '@angular/core';
import {DocModel} from "../../models/doc-model";

@Component({
  selector: 'app-doc-cell',
  templateUrl: './doc-cell.component.html',
  styleUrls: ['./doc-cell.component.css']
})
export class DocCellComponent implements OnInit{


  constructor() {
  }

  @Input()
  doc: DocModel;

  ngOnInit(): void {
  }


}
