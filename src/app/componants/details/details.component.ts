import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit{
  ID:any;
  student:any;
  constructor(myActivate:ActivatedRoute,private myService:ServiceService){
    this.ID=myActivate.snapshot.params["id"]
  }
  ngOnInit(): void {
   this.myService.GetStudentByID(this.ID).subscribe({
    next:(res)=>{
      this.student=res;
      console.log(this.student)
    },
    error:(err)=>{console.log(err)}
   })
  }

}
