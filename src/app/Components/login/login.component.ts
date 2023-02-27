import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { General } from 'src/GeneralClass/general';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  sUserError:string="";  
  sPassError:string="";

  Username:string="";
  Password:string="";

  constructor(private http: HttpClient) {}

  Login()
  {
    General.getData(this.http,"Login").subscribe((result) => {
      console.log(result);
    });
  }
}
