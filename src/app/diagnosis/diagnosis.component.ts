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
  dataSource: {} = {};
  validity: boolean = false;
  selectedData: {} = {};
  loading: boolean = false;

  constructor(private service: DiagnosisService) {
    this.localData = history.state;
    this.getTheDiagnosis();
   }

  ngOnInit(): void {}


  getTheDiagnosis(): void {
    this.service.getDiagnosis().subscribe((response: any) => {
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
    this.selectedData = {
      accuracy: data.Accuracy,
      id: data.ID,
      icd: data.Icd,
      icdName: data.IcdName,
      name: data.Name,
      profName: data.ProfName,
      ranking: data.Ranking,
      validityResponse: validityResponse
    } 
  }


  saveData(request: any): void {
    this.loading = true
    this.service.post(request)
    .pipe(finalize(() => {this.loading = false}))
    .subscribe(() => {
    }, error => {
      console.error(error)
    })


  }
}



