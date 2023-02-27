import { HttpClient } from '@angular/common/http';

export class General {
    static http: HttpClient;

    static getData(http: HttpClient, ApiPath: string) {
        this.http = http;

        return this.http.get('https://localhost:44397/' + ApiPath);

    }
}
