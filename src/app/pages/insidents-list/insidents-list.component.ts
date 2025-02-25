import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MasterService } from '../../services/master.service';

@Component({
  selector: 'app-insidents-list',
  imports: [],
  templateUrl: './insidents-list.component.html',
  styleUrl: './insidents-list.component.css'
})
export class InsidentsListComponent implements OnInit {


  masterSrv = inject(MasterService)


  loggedUserData: any;
  incidentList: any[] = []

  constructor() {
    const data = localStorage.getItem("incidentUser");
    if (data != null) {
      this.loggedUserData = JSON.parse(data);
    }
  }

  ngOnInit(): void {
      if(this.loggedUserData.role == "User"){
        this.getIncidentCreatedByUser();
      } else if(this.loggedUserData.role == "IncidentAdmin"){
        this.getAllIncidents()
      }
      else if(this.loggedUserData.role == "Support Staff"){
        this.getIncidentAssigntoUser();
      }
  }

  getIncidentCreatedByUser() {
    this.masterSrv.getIncidentCreatedByUser(this.loggedUserData.userId).subscribe((res: any) => {
      this.incidentList = res;
    })
  }

  getAllIncidents() {
    this.masterSrv.getAllIncidents().subscribe((res: any) => {
      this.incidentList = res;
    })
  }

  getIncidentAssigntoUser() {
    this.masterSrv.getIncidentAssigntoUser(this.loggedUserData.userId).subscribe((res: any) => {
      this.incidentList = res;
    })
  }

}
