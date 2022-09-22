import { Component, OnInit } from '@angular/core';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-showpatient',
  templateUrl: './showpatient.component.html',
  styleUrls: ['./showpatient.component.css']
})
export class ShowpatientComponent implements OnInit {

  patients:any;
  patient=[]
  patid:number;  
  name=""
  age:number;

  constructor(private patientService :PatientService) { }

  ngOnInit(): void {
    
  }



  getData(){
    this.patient=[]
   return this.patientService.getPateint(this.patid).subscribe(data=>{
      this.name=data["name"]
      this.patients=data["listOfVisit"];
      this.patient=this.patients;
    },err=>{
      console.log(err.status)
      alert("Invalid patient")
    })
  }


}
