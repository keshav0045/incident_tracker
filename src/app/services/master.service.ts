import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IAPIRESPONSE, user } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  http = inject(HttpClient);

  login(obj:user){
    debugger;
    return this.http.post<IAPIRESPONSE>("https://projectapi.gerasim.in/api/IncidentTracking/login",obj);
  }
}
