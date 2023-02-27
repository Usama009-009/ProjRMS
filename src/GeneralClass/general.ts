import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export class General {
    // static http: HttpClient;
    static ApiURL: string = "https://localhost:44397/";
    static getData(http: HttpClient, ApiPath: string) {


        return http.get('https://localhost:44397/' + ApiPath);

    }

    static postformurlencoded(http: HttpClient, endpoint: string, body: any){
        // return http.post(this.ApiURL+endpoint, body, { headers });

        const headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded'
        });

        return http.post(this.ApiURL + endpoint, body, { headers });
        // .subscribe(response => {
        //     console.log(response);
        //   });
    }   
}
