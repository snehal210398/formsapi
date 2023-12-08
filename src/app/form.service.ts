import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface UserData { user_name: any; password: any; e_mail: any; role: any; status_toggle: any; };
export interface user { u_id: any; user_name: any; e_mail: any; role: any; status_toggle: any; };
@Injectable({
  providedIn: 'root'
})
export class FormsService {

  constructor(private http: HttpClient) { }

  createUser(data: UserData){
    return this.http.post("http://50.19.74.152:8000/api/temp-users/", data);
  }

  deleteUser(id:number){
    return this.http.delete(`http://50.19.74.152:8000/api/temp-users/${id}/delete/`);
  }

  updateUser(id:number, data: any){
    return this.http.put(`http://50.19.74.152:8000/api/temp-users/${id}/delete/`, data);
  }

  getUsers(){
    return this.http.get("http://54.227.6.59:8000/api/temp-users/");
  }
}
