import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { CommandesInterface } from '../intrfaces/commandes-interface';

@Injectable({
  providedIn: 'root'
})
export class CommandesService {

  urlApi= 'http://localhost:5000/commandes';

  constructor(private http: HttpClient) { }

  // -------------------- CRUD --------
  // --- Get
  getCommandes(){
    return this.http.get<CommandesInterface>(this.urlApi);
  }

  // --- Delete
  deleteCommandes(id){
    return this.http.delete(`${this.urlApi}/${id}`);
  }


}
