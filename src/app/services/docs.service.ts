import {Injectable, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {DocModel} from "../models/doc-model";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DocsService{

  constructor(private httpClient: HttpClient) { }

  getMyDocs(id: string): Observable<DocModel[]> {

    const url = `http://localhost:9998/doc/all/${id}`;
    return this.httpClient.get<DocModel[]>(url);

  }

  deleteDocument(id: string) {
    const url = `http://localhost:9998/doc/delete/${id}`;
    return this.httpClient.delete(url);
  }

  fetchDoc(docId: string): Observable<DocModel> {
    const url = `http://localhost:9998/doc/get/${docId}`;
    return this.httpClient.get<DocModel>(url);
  }

  saveDoc(docModel: DocModel) {
    const url = `http://localhost:9998/doc/update`;
    return this.httpClient.put<DocModel>(url, docModel);
  }

  fetchRecentDocuments(): Observable<DocModel[]> {
    const url = `http://localhost:9998/doc/recent`;
    return this.httpClient.get<DocModel[]>(url);
  }
}
