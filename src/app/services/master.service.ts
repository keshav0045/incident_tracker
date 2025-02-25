import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IAPIRESPONSE, user } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  http = inject(HttpClient);

  apiUrl : string = "https://projectapi.gerasim.in/api/IncidentTracking/"   // since this is going to be comman service for all the components, we will use base url here and then append the api url in each

  login(obj:user){
    debugger;
    return this.http.post<IAPIRESPONSE>(this.apiUrl + "login",obj);  // using concadination
  }

  getAllUsers(){
    return this.http.get(`${this.apiUrl}GetAllUsers`)   // using templet literals 
  }

  createNewUser(obj:any){
    return this.http.post(`${this.apiUrl}Register`,obj)   
  }

  updateUser(obj:any){
    return this.http.post(`${this.apiUrl}UpdateUser`,obj)   
  }

  deleteUserById(id:number){
    return this.http.delete(`${this.apiUrl}DeleteUserByUserId?userId=${id}`)   
  }

  createNewIncident(obj:any){
    return this.http.post(`${this.apiUrl}createIncident`,obj)   
  }

  getIncidentCreatedByUser(id: number){
    return this.http.get(`${this.apiUrl}getIncidentCreatedByUser?userId=${id}`)   
  }

  getIncidentAssigntoUser(id: number){
    return this.http.get(`${this.apiUrl}getIncidentAssigntoUser?userId=${id}`)   
  }

  getAllIncidents(){
    return this.http.get(`${this.apiUrl}getAllIncidents`)   
  }

}
