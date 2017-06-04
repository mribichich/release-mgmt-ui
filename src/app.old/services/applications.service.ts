import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Application } from '../entities';

@Injectable()
export class ApplicationsService {

  constructor(private http: Http) { }

  findByName(name: string): Promise<Application> {
    return this.http.get(`http://localhost:8080/applications/${name}`)
      .toPromise()
      .then(response => response.json() as Application)
      .catch(this.handleError);
  }

  find(): Promise<Application[]> {
    return this.http.get('http://localhost:8080/applications')
      .toPromise()
      .then(response => response.json() as Application[])
      .catch(this.handleError);
  }

  create(application: Application): Promise<void> {
    return this.http.post('http://localhost:8080/applications', application)
      .toPromise()
      .catch(this.handleError);
  }

  updateByName(application: Application): Promise<void> {
    return this.http.put(`http://localhost:8080/applications/${application.name}`, application)
      .toPromise()
      .catch(this.handleError);
  }

  deleteByName(name: string): Promise<void> {
    return this.http.delete(`http://localhost:8080/applications/${name}`)
      .toPromise()
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
