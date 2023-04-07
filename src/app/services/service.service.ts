import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor( private HttpClient:HttpClient) { }
private Base_url="http://localhost:3000/students"
GetAllStudents(){
  return this.HttpClient.get(this.Base_url,{observe:"body"});
}
GetStudentByID(id:any){
  return this.HttpClient.get(`${this.Base_url}/${id}`);
}
DeleteStudentByID(id:any){
  return this.HttpClient.delete(`${this.Base_url}/${id}`);
}
add(addData:any){
  return this.HttpClient.post(this.Base_url,addData);
}
updateStudent(id:any,updataData:any){
  return this.HttpClient.put(`${this.Base_url}/${id}`,updataData);
}


}
