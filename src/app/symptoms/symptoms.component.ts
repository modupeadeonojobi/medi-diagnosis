import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DiagnosisService } from './../service/diagnosis.service';
import { TypeaheadMatch } from 'ngx-bootstrap/typeahead/typeahead-match.class';
import { Symptom } from '../model/symptom';
import { Router } from '@angular/router';

@Component({
  selector: 'app-symptoms',
  templateUrl: './symptoms.component.html',
  styleUrls: ['./symptoms.component.css']
})
export class SymptomsComponent implements OnInit {

  selectedValue: string = '';
  selectedOption: string = ''
  symptoms: Symptom[] = [];

  symptomForm = new FormGroup({
    yearOfBirth: new FormControl('', [
      Validators.required,
    ]),
    gender: new FormControl('', [
      Validators.required,
    ]),
    symptom: new FormControl('', [
      Validators.required,
    ])
  });

 
  constructor(private service: DiagnosisService, private route: Router) {
    this.getAllSymptoms();
  }

  ngOnInit() { }

  onSelect(event: TypeaheadMatch): void {
    this.selectedOption = event.item;
  }

  getAllSymptoms() {
    this.service.getSymptoms().subscribe((response: Symptom[]) => {
      this.symptoms = response;
    }, error => {
      console.error(error);
    });
  }

  onSubmit() {
    if (this.symptomForm.invalid) {
      return;
    }
    const symptomSelected: {} = this.selectedOption;
    const formDetails = this.symptomForm.value;
    const theObj = { ...symptomSelected, ...formDetails}
    this.route.navigateByUrl('/diagnosis', {state: theObj});
  }
}
