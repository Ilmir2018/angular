import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { TableContent } from '../other_clases/table-content';
import { User } from '../other_clases/user';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private url = 'http://localhost:3001/content/';
  private saveUser = 'http://localhost:3001/userList'

  constructor(private http: HttpClient) { }

  getContent(): Observable<any> {
    return this.http.get(`${this.url}`)
    .map((response: TableContent[]) => response);
  }

  addContact(user: User): Observable<User[]> {
    const data = {firstName: user.firstName, lastName: user.lastName, role: user.role,
      schedule: user.schedule, isActive: user.isActive, id: user.id}
    return this.http.post(this.saveUser, data)
     .map((response: User[]) => response);
  }
}
