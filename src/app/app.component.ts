import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  detailsForm!:FormGroup;
  constructor(private fb: FormBuilder, private forms: FormsService) { }

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
    this.forms.createUser(data).subscribe((data)=>{
      console.log(data);
    })
    this.detailsForm.reset();
  }

  deleteUser(){
    let id = 1;
    this.forms.deleteUser(id).subscribe((data)=>{
      console.log(data);
    })
  }

  updateUser(){
    let id = 1, data = ""
    this.forms.updateUser(id, data).subscribe((data)=>{
      console.log(data);
    })
  }

  getUsers(){
    this.forms.getUsers().subscribe((data)=>{
      console.log(data);
    })
  }
}
