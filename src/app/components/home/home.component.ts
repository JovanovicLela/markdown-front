import {Component, OnInit} from '@angular/core';
import {DocModel} from "../../models/doc-model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  recentDocs: DocModel[] = [];

  constructor() {

    let doc = new DocModel();
    doc.available = false;
    doc.title = 'some title'

    this.recentDocs.push(doc);
    this.recentDocs.push(doc);
    this.recentDocs.push(doc);
    this.recentDocs.push(doc);
  }

  ngOnInit(): void {
  }

}
