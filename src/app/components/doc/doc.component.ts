import {Component, OnInit} from '@angular/core';
import {DocModel} from "../../models/doc-model";
import {ActivatedRoute, Router} from "@angular/router";
import {DocsService} from "../../services/docs.service";

@Component({
  selector: 'app-doc',
  templateUrl: './doc.component.html',
  styleUrls: ['./doc.component.css']
})
export class DocComponent implements OnInit{

  doc: DocModel;
  content = '';
  docIdParam = null;
  docTitle = '';

  constructor(private route: ActivatedRoute,
              private docsService: DocsService,
              private router: Router) {

    this.route.params.subscribe(params => {
      if (params.id) {
        this.docIdParam = params.id;
      }
    });
  }

  ngOnInit(): void {

    if (this.docIdParam) {
      this.fetchDocument();
    }
  }

  fetchDocument() {

    this.docsService.fetchDoc(this.docIdParam).subscribe(
      data => {
        this.doc = data;
        this.docTitle = this.doc.title;
        this.content = this.doc.content;
      },
      error => {
        alert(`Couldn't fetch document ${this.docIdParam}: $error`);
      }
    );
  }


  loadSuccessful(event) {
    console.log('successful');
  }

  onError(event) {
    alert(`Couldn't fetch document ${this.docIdParam}: ${event}`);

  }

  saveDoc() {

    this.doc.content = this.content;
    this.doc.dateUpdated = null;
    this.doc.title = this.docTitle;

    this.docsService.saveDoc(this.doc).subscribe(
      data => {
        this.router.navigate(['/mydocs']);
      },
      error => {
        alert(`Document couldn't be saved: ${error.message}`);
      }
    );
  }
}
