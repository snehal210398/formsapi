import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormsService, user } from './form.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  detailsForm!:FormGroup;
  userData! : user[];
  constructor(private fb: FormBuilder, private form: FormsService) { }

  ngOnInit(): void {
    this.detailsForm = this.fb.group({
      userName: new FormControl("", {validators:[Validators.required]}),
      password: ['', [Validators.required]],
      email:['', [Validators.required, Validators.email]],
      role:["", [Validators.required]],
      status:["", [Validators.required]]
    })
    console.log(this.detailsForm.controls['userName'].getRawValue());
    console.log(this.detailsForm.controls['userName'].value);
    

  }

   addDetails(){
    console.log(this.detailsForm.getRawValue());
    const data = {
      "user_name": this.detailsForm.controls['userName'].value,
      "password": this.detailsForm.controls['password'].value,
      "e_mail": this.detailsForm.controls['email'].value,
      "role":this.detailsForm.controls['role'].value,
      "status_toggle": this.detailsForm.controls['status'].value,
    }
    this.form.createUser(data).subscribe((data)=>{
      console.log(data);
    })
    this.detailsForm.reset();
  }

  deleteUser(id:any){
    this.form.deleteUser(id).subscribe((data)=>{
      console.log(data);
    })
  }

  updateUser(id: any, data:any){
    this.form.updateUser(id, data).subscribe((data)=>{
      console.log(data);
    })
  }

  getUsers(){
    this.form.getUsers().subscribe((data)=>{
      console.log(data);
    })
  }
}
