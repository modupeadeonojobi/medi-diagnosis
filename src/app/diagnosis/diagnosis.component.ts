import { DiagnosisService } from './../service/diagnosis.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diagnosis',
  templateUrl: './diagnosis.component.html',
  styleUrls: ['./diagnosis.component.css']
})
export class DiagnosisComponent implements OnInit {

  localData: {} = {};
  dataSource: any[] = [];
  

  constructor(private service: DiagnosisService) {
    this.localData = history.state;
    this.getTheDiagnosis();
    
   }

  ngOnInit(): void {}

  getTheDiagnosis() {
    this.service.getDiagnosis().subscribe((response: any) => {
      console.log(response);
      this.dataSource = response
      

    }, error => {
      console.error(error);
    })
  }

}
