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
    this.recentDocs.push(new DocModel())
    this.recentDocs.push(new DocModel())
    this.recentDocs.push(new DocModel())
    this.recentDocs.push(new DocModel())
  }

  ngOnInit(): void {
  }

}
