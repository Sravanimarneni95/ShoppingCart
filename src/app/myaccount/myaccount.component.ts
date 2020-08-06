import { Component, OnInit } from '@angular/core';
import { FormGroup, FormsModule, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { from } from 'rxjs';

@Component({
  selector: 'app-myaccount',
  templateUrl: './myaccount.component.html',
  styleUrls: ['./myaccount.component.css']
})
export class MyaccountComponent implements OnInit {
  model : any = {}
  
  
  constructor() {}

  ngOnInit(): void {
  }

}
// import { Component, OnInit } from '@angular/core';
// import {FormGroup, FormBuilder,FormsModule } from'@angular/forms';
// import { ReactiveFormsModule } from '@angular/forms';

// import { from } from 'rxjs';

// @Component({
//   selector: 'app-myaccount',
//   templateUrl: './myaccount.component.html',
//   styleUrls: ['./myaccount.component.css']
// })
// export class MyaccountComponent implements OnInit {
//   model:any={}

//   constructor() {}

//   ngOnInit(): void {
//   }

// }
