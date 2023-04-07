import { Component, OnInit } from '@angular/core';
import { FormControl ,FormGroup,Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  error="";
  ID:any;
  student:any;
  updateForm:any;
  constructor(private ActivatedRoute:ActivatedRoute,private myservice:ServiceService,private router:Router){
    this.ID=this.ActivatedRoute.snapshot.params["id"]
  
  }

    update(){  
      if(this.updateForm.invalid){
         this.error="invalid updated"
      }
      else{
        this.myservice.updateStudent(this.ID,this.updateForm.value).subscribe({
          next:()=>{
             // this.router.navigate(['/students'])
          this.router.navigateByUrl('/students')
            },
            error:(err)=>{
              console.log(err)
            }
          })
      }
    }
  ngOnInit(): void {
    console.log(this.ID)
   this.myservice.GetStudentByID(this.ID).subscribe({
    next:(res)=>{
  this.student=res;
  console.log(this.student)

  this.updateForm=new FormGroup({
    name:new FormControl(this.student.name,[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
    age:new FormControl(this.student.age,[Validators.required,Validators.min(16),Validators.max(60)]),
    email:new FormControl(this.student.email,[Validators.required,Validators.email]),
    phone:new FormControl(this.student.phone,Validators.required),
    
    });
 
    },
    error:(err)=>{
      console.log(err)
    }
   })
  }


}
