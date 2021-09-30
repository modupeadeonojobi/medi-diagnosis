import { Injectable } from '@angular/core'
import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';;
import { Observable } from 'rxjs';
import { Symptom } from '../model/symptom';

@Injectable({
  providedIn: 'root'
})
export class DiagnosisService {

  rootUrl = environment.apiUrl;
  serverUrl = environment.serverUrl;
  tooken = environment.token;

  
  constructor(private http: HttpClient) { }

  getSymptoms(): Observable<Symptom[]> {
    let url = `${this.rootUrl}/symptoms?token=${this.tooken}&language=de-ch`;
    return this.http.get<Symptom[]>(url);
  }

  getDiagnosis(): Observable<any> {
    let url = `${this.rootUrl}/diagnosis?token=${this.tooken}&language=de-ch&symptoms=[235]&gender=male&year_of_birth=1988`;
    return this.http.get<any>(url);
  }

  post(request: any) {
    let url = `${this.serverUrl}/diagnosis`;
    return this.http.post(url, request, { responseType: 'text' });
  }


}

