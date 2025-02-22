import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MasterService } from '../../services/master.service';

@Component({
  selector: 'app-users',
  imports: [ReactiveFormsModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  
  userForm: FormGroup = new FormGroup({});
  masterSrv = inject(MasterService)


  constructor(){
    this.initializeForm();
  };

  initializeForm(){
    this.userForm = new FormGroup({
      userId : new FormControl(0),
      userName : new FormControl(''),
      emailId : new FormControl(''),
      fullName : new FormControl(''),
      password : new FormControl(''),
      role : new FormControl('')
    });
  };

  onSaveUser(){
    debugger;
    const formValue = this.userForm.value;
    this.masterSrv.createNewUser(formValue).subscribe((res:any)=>{
      if(res.result){
        alert("user created success");
      }else{
        alert("res.message");
      }
    })

  }

}
