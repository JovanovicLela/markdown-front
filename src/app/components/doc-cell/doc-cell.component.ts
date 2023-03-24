import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DocModel} from "../../models/doc-model";
import {AuthenticationService} from "../../services/authentication.service";
import {DocsService} from "../../services/docs.service";

@Component({
  selector: 'app-doc-cell',
  templateUrl: './doc-cell.component.html',
  styleUrls: ['./doc-cell.component.css']
})
export class DocCellComponent implements OnInit{


  constructor(private authenticationService: AuthenticationService,
              private docService: DocsService) {
  }

  @Input()
  doc: DocModel;

  @Output()
  docDeleted: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {
  }

  deleteDocument(event) {


    this.docService.deleteDocument(this.doc.id).subscribe(
      data => {
        // notify the parent
        this.docDeleted.emit(this.doc.id);
      },
      error => {
        alert(`Document ${this.doc.id} was not deleted`);

      }
    )


  }

  currentUserIsOwner() {

    if (this.doc == null || this.doc.id == null || this.authenticationService.currentUserValue == null) {
      return false;
    }



    const docOwner = this.doc.userId;
    const currentUserId = this.authenticationService.currentUserValue.id;

    return docOwner === currentUserId;
  }


}
