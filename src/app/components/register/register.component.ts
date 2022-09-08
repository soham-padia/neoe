import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  firstName: string | undefined;
  lastName: any;
  dob: any;
  email: any;
  pass1: any;
  pass2: any;

  constructor(public dialogRef:MatDialogRef<RegisterComponent>) { }

  ngOnInit(): void {
  }

}
