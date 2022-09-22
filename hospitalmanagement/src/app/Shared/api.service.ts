import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http :HttpClient) { }


  postDoctor(data : any){
    return this.http.post<any>("http://localhost:8053/doctor",data).pipe(map((res:any)=>{
      return res;
    }))
  }
  postPatient(data :any){
    return this.http.post<any>("http://localhost:8055/patient" , data ).pipe(map((res:any)=>{
      return res;
    }))
  }
  getAllDoctors(){
    return this.http.get<any>("http://localhost:8053/doctor").pipe(map((res:any)=>{
      return res;
    }))
  }
  getdocVisted(id:any){
    return this.http.get<any>("http://localhost:8055/patient/doctor/"+id).pipe(map((res:any)=>{
      return res;
    }))

  }
}

