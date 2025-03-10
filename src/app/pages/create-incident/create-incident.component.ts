import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MasterService } from '../../services/master.service';

@Component({
  selector: 'app-create-incident',
  imports: [FormsModule],
  templateUrl: './create-incident.component.html',
  styleUrl: './create-incident.component.css'
})
export class CreateIncidentComponent {

  incidentObj: any = {
    "incidentId": 0,
    "title": "",
    "description": "",
    "priority": "",
    "status": "Open",
    "createdBy": 0,
    "assignedTo": 0,
    "createdDate": new Date(),
    "resolvedDate": null
  }

  
  loggedUserData: any;

  constructor() {
    const data = localStorage.getItem("incidentUser");
    if (data != null) {
      this.loggedUserData = JSON.parse(data);
    }
  }

  masterSrv = inject(MasterService);

  onSave() {
    this.incidentObj.createdBy = this.loggedUserData.userId;
    this.masterSrv.createNewIncident(this.incidentObj).subscribe((res: any) => {
      alert("Incident created Successfully!");
    }, error => {
      debugger;
    })
  }

}
