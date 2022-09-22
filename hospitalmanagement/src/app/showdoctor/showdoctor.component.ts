import { Component, OnInit } from '@angular/core';
import { FormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { Doctors } from '../createpatient/doctors.model';
import { ApiService } from '../Shared/api.service';

@Component({
  selector: 'app-showdoctor',
  templateUrl: './showdoctor.component.html',
  styleUrls: ['./showdoctor.component.css']
})
export class ShowdoctorComponent implements OnInit {


  doctors : Array<Doctors>=[];
  selecteddoctor : string='';
  selecteddoctorid !: number | undefined;
  selecteddoctorage !:number | undefined;
  selecteddoctorspecialization :string | undefined ;
  patients:any;
  patient=[];
  
  constructor( private  api : ApiService) { }

  ngOnInit(): void {  
    this.getAllDoctors();
  }
 
  changeDoc(){
    const found=this.doctors.find((obj)=>{
      return obj.docName===this.selecteddoctor
    })
    this.selecteddoctorid=found?.docid
    this.selecteddoctorage=found?.docAge
    this.selecteddoctorspecialization=found?.docSpecialization 
    this.api.getdocVisted(this.selecteddoctorid).subscribe(res=>{this.patient=res;})
    console.log(this.patient.length)

  }
  getAllDoctors() {
    this.api.getAllDoctors().subscribe(res => {
      this.doctors = res;
    })

  }
}
