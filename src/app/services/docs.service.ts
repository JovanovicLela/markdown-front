import {Injectable, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {DocModel} from "../models/doc-model";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class DocsService{

  constructor(private httpClient: HttpClient) { }

  getMyDocs(id: string): Observable<DocModel[]> {

    const url = `${environment.ENDPOINTS.DOC_FOR_USER}/${id}`;
    return this.httpClient.get<DocModel[]>(url);
  }

  deleteDocument(id: string) {
    const url = `${environment.ENDPOINTS.DOC_DELETE}/${id}`;
    return this.httpClient.delete(url);
  }

  fetchDoc(docId: string): Observable<DocModel> {
    const url = `${environment.ENDPOINTS.DOC_FETCH}/${docId}`;
    return this.httpClient.get<DocModel>(url);
  }

  saveDoc(docModel: DocModel) {
    const url = `${environment.ENDPOINTS.DOC_UPDATE}`;
    return this.httpClient.put<DocModel>(url, docModel);
  }

  fetchRecentDocuments(): Observable<DocModel[]> {
    const url = `${environment.ENDPOINTS.DOC_RECENT}`;
    return this.httpClient.get<DocModel[]>(url);
  }

  createDoc(docModel: DocModel): Observable<DocModel> {
    const url = `${environment.ENDPOINTS.DOC_CREATION}`;
    return this.httpClient.post<DocModel>(url, docModel);
  }
}
