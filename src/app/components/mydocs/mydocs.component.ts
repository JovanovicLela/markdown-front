import {Component, OnInit} from '@angular/core';
import {DocModel} from "../../models/doc-model";
import {DocsService} from "../../services/docs.service";
import {AuthenticationService} from "../../services/authentication.service";

@Component({
  selector: 'app-mydocs',
  templateUrl: './mydocs.component.html',
  styleUrls: ['./mydocs.component.css']
})
export class MydocsComponent implements OnInit{

  myDocsList: DocModel[] = [];

  constructor(private docService: DocsService,
              private authenticationService: AuthenticationService) {
  }

  ngOnInit(): void {

    if (this.authenticationService.currentUserValue && this.authenticationService.currentUserValue.id) {
      this.docService.getMyDocs(this.authenticationService.currentUserValue.id).subscribe(
        data => {
          this.myDocsList = data;
        },
        error => {
          alert(`${error.message}`);
        }
      );
    }
  }


  cellDeleted(docChildId: string) {

    this.myDocsList = this.myDocsList.filter(doc => doc.id != docChildId);
  }
}
