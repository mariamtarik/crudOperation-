
import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 
  students:any;
  constructor(public myService:ServiceService ,private Router:Router){
   
  }

  deleteOne(id:any){
    this.myService.DeleteStudentByID(id).subscribe({
      next:(res)=>{
      this.Router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
      this.Router.navigate(["/students"]));
      },
      error:(err)=>{console.log(err)}
     })
  }
 

  ngOnInit(): void {
    this.myService.GetAllStudents().subscribe({
      next:(res)=>{
        console.log(res)
        this.students = res;
      },
      error:(err)=>{console.log(err)}
    });


  }
 




}
