import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  configUrl = 'assets/portfolio.json';


  constructor(private http: HttpClient) { }


  getProjects() {
    return this.http.get<Portfolio>(this.configUrl);
  }


}


export interface Portfolio {
  name: string;
  codeUrl: string;
  siteUrl: string;
  languages: string;
  photo: string;
}