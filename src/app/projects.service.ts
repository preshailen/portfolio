import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  uri = 'http://localhost:4000/projects';
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  addProject(pTitle, pType, pGithub, pDemo, pDescription) {
    const obj = {
       title: pTitle,
       type: pType,
       github: pGithub,
       demo: pDemo,
       description: pDescription
    };
    console.log(obj);
    this.http.post(`${this.baseUrl}/add`, obj)
        .subscribe(res => console.log('Done'));
  }
  getProjects() {
    return this
               .http
               .get(`${this.baseUrl}`);
  }
}
