import { Component, inject} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IAPIRESPONSE, user } from '../../models/user';
import { MasterService } from '../../services/master.service';
import { Router } from '@angular/router';





@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginObj: user = new user();
  masterSrv = inject(MasterService)
  router = inject(Router);

  onLogin(){
    debugger;
    this.masterSrv.login(this.loginObj).subscribe((res:IAPIRESPONSE)=>{
      debugger;
      if(res.result){
        localStorage.setItem('incidentUser', JSON.stringify(res.data));
        this.router.navigateByUrl('/dashboard');
      }else{
        alert('Invalid username or password');
      }
    })
  }
}
