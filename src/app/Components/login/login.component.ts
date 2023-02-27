import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { generate } from 'rxjs';
import { General } from 'src/GeneralClass/general';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  sUserError: string = "";
  sPassError: string = "";

  Username: string = "";
  Password: string = "";

  constructor(private http: HttpClient) { }

  Login() {
    if(this.Username == "")
    {
      this.sUserError = "Required : Username";
    }
    if(this.Password == "")
    {
      this.sPassError = "Required : Password";      
    }



    const body = `username=${this.Username}&password=${this.Password}&grant_type=password`;
    // const headers = { 'Content-Type': 'application/x-www-form-urlencoded' };
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

    General.postformurlencoded(this.http, "Login", body).subscribe((response: any) => {
      const token = response.access_token;
      localStorage.setItem('token', token);
    }, (error: any) => {
      console.error(error);
      const sError: string = error.error.error_description;
      if (sError.includes("Username")) {
        this.sUserError = sError;
      }
      else
      {
        this.sUserError = "";
      }
      if (sError.includes("Password")) {
        this.sPassError = sError;}
        else{
          this.sPassError = "";
        }
    });
    // console.log(localStorage.getItem('token'));
    // this.http.post(General.ApiURL+"Login", body, { headers }).subscribe(response => {
    //   console.log(response.);
    // });
  }
}
