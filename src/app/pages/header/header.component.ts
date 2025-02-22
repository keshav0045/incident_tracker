import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterOutlet,RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  loggedUserData: any;
  router = inject(Router);   // for use of router to navigate

  constructor(){
    const data = localStorage.getItem("incidentUser");  // storing user data in local storage
    if (data != null){
      this.loggedUserData = JSON.parse(data);
    }
  }

  logOff(){
    localStorage.removeItem("incidentUser"); // remove user data from local storage
    this.router.navigateByUrl("/login");     // redirecting to login page
  }

}
