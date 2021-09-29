import { DiagnosisComponent } from './diagnosis/diagnosis.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SymptomsComponent } from './symptoms/symptoms.component';


const routes: Routes = [
  { path: '', component: SymptomsComponent },
  { path: 'diagnosis', component: DiagnosisComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
