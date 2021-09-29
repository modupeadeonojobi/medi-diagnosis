import { Injectable } from '@angular/core'
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';;
import { Observable } from 'rxjs';
import { Symptom } from '../model/symptom';

@Injectable({
  providedIn: 'root'
})
export class DiagnosisService {

  rootUrl = environment.apiUrl;
  tooken = environment.token;


  constructor(private http: HttpClient) { }

  getSymptoms(): Observable<Symptom[]> {
    let url = `${this.rootUrl}/symptoms?token=${this.tooken}&language=de-ch`;
    return this.http.get<Symptom[]>(url);
  }

  getDiagnosis(): Observable<any> {
    let symptoms = 'https://sandbox-healthservice.priaid.ch/symptoms';
    let url = `${this.rootUrl}/diagnosis?token=${this.tooken}&language=de-ch&symptoms=[235]&gender=male&year_of_birth=1988`;
    return this.http.get<any>(url);
  }



  // public post(cmd: string, data: object): Observable<any> {

  //   const params = new URLSearchParams();
  //   params.set('cmd', cmd);

  //   const options = new RequestOptions({
  //     headers: this.getAuthorizedHeaders(),
  //     responseType: ResponseContentType.Json,
  //     params: params,
  //     withCredentials: false
  //   });

  //   console.log('Options: ' + JSON.stringify(options));

  //   return this.http.post(this.BASE_URL, data, options)
  //     .map(this.handleData)
  //     .catch(this.handleError);
  // }
}

