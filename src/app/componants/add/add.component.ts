import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators} from '@angular/forms';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit{
  success="";
  error="";
 constructor(private myService:ServiceService){}
  addForm:FormGroup=new FormGroup({
    'name':new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
    'age':new FormControl(null,[Validators.required,Validators.min(16),Validators.max(60)]),
    'email':new FormControl(null,[Validators.required,Validators.email]),
    'phone':new FormControl(null,Validators.required),
    
    })
    Show(){
      if(this.addForm.invalid){
        this.error="can't add data";
        this.success="";
      }
      else{
        this.myService.add(this.addForm.value).subscribe({
          next:(data)=>{
            // console.log(data)
            this.success="success";
            this.error="";
            this.addForm.reset();
          },
         error:(err)=>{
          console.log(err)
         }
          
        })
      }
    }
    ngOnInit(): void {
      
    }

}
