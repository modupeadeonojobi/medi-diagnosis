import { Component, OnInit } from '@angular/core';
import { DiagnosisService } from './../service/diagnosis.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-diagnosis',
  templateUrl: './diagnosis.component.html',
  styleUrls: ['./diagnosis.component.css']
})
export class DiagnosisComponent implements OnInit {

  localData: {} = {};
  dataSource: any[] = [];
  validity: boolean = false;
  selectedData: {} = {};
  loading: boolean = false;
  show: boolean = false;

  constructor(private service: DiagnosisService) {
    this.localData = history.state;
    const symptomId = this.localData['ID'];
    const gender = this.localData['gender'];
    const birthYear = this.localData['yearOfBirth']   
    this.getTheDiagnosis(symptomId, gender, birthYear);
   }

  ngOnInit(): void {}


  getTheDiagnosis(id: string, gender: string, birth: string): void {
    this.show = true;
    this.service.getDiagnosis(id, gender, birth )
    .pipe(finalize(() => this.show = false)).subscribe((response: any) => {
      this.dataSource = response;      
    }, error => {
      console.error(error); 
    })
  }

  validButton(): void {
    this.validity = true;
    this.saveData(this.selectedData);
  }

  invalidButton(): void {
    this.validity = false;
    this.saveData(this.selectedData);
  }

  updateServer(inputObject: any): void {
    const data = inputObject?.value?.Issue;
    const validityResponse = this.validity;
    const allData = {...data, validityResponse}
    this.selectedData = {
      accuracy: allData.Accuracy,
      id: allData.ID,
      icd: allData.Icd,
      icdName: allData.IcdName,
      name: allData.Name,
      profName: allData.ProfName,
      ranking: allData.Ranking,
      validityResponse: allData.validityResponse
    }     
  }

  saveData(request: any): void {
    this.loading = true;
    this.service.post(request)
    .pipe(finalize(() => {this.loading = false}))
    .subscribe(() => {
    }, error => {
      console.error(error);
    })
  }


}



