import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, Validators,FormBuilder,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  model : any = {}
  // signupForm : FormGroup;
  // Name = String;
  // uname = String;
  // email = String;
  // pwd = String;
  // cpwd = String;
  // phoneNum = Number;
  


  constructor() { 
    
  }

  ngOnInit() {
    // this.signupForm = this.formBuilder.group({
    // Name:['', [Validators.required,Validators.minLength(6)]]
    // // email: ['', [Validators.required, Validators.email]],
    // //   password: ['', [Validators.required, Validators.minLength(6)]],
    // });

  }
  // get f() 
  // { 
  //   return this.signupForm.controls; 
  // }
  // createAccount(){
  //   this.submitted = true;
   

  //   if (this.signupForm.invalid) {
  //     return;
  //   }
  //   alert("registration sucessfull");

  // }

}
