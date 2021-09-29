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

  selectedValue: string = '';
  selectedOption: string = ''
  symptoms: Symptom[] = [];

  constructor(private service: DiagnosisService, private route: Router) {
    this.getAllSymptoms();
  }

  ngOnInit() { }

  symptomsFormErrors() {
    const { dirty, touched, errors } = this.symptomForm;
    return dirty && touched && errors;
  }

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
    const symptomSelected = this.selectedOption;
    const formDetais = this.symptomForm.value;
    let theObj = { symptomSelected, ...formDetais}
    console.log(theObj);
    this.route.navigateByUrl('/diagnosis', {state: theObj});
  }
}
