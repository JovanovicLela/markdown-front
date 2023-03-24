import {Injectable, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {DocModel} from "../models/doc-model";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DocsService implements OnInit{

  constructor(private httpClient: HttpClient) { }

  getMyDocs(id: string): Observable<DocModel[]> {

    const url = `http://localhost:9998/doc/${id}/all`;
    return this.httpClient.get<DocModel[]>(url);

  }

  ngOnInit(): void {
  }

  deleteDocument(id: string) {
    const url = `http://localhost:9998/doc/${id}/delete`;
    return this.httpClient.delete(url);
  }
}
