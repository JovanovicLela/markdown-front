import {Component, OnInit} from '@angular/core';
import {DocModel} from "../../models/doc-model";
import {DocsService} from "../../services/docs.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  recentDocs: DocModel[] = [];

  constructor(private docsService: DocsService) {

  }

  ngOnInit(): void {
    this.fetchRecentDocs();
  }

  fetchRecentDocs() {
    this.docsService.fetchRecentDocuments().subscribe(
      data => this.recentDocs = data,
      error => alert(`Recent documents could not be fetched: ${error.message}`)
    );
  }

  reloadRecentDocs() {
    this.fetchRecentDocs();
  }
}
