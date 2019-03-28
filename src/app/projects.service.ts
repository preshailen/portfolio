import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  uri = 'http://localhost:4000/projects';

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
    this.http.post(`${this.uri}/add`, obj)
        .subscribe(res => console.log('Done'));
  }
  getProjects() {
    return this
               .http
               .get(`${this.uri}`);
  }
}
