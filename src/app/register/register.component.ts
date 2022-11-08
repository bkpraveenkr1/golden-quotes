import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }

  register(regForm: NgForm) {
    console.log(regForm.value)
    this.authService.register(regForm.value.email,regForm.value.password)
  }

  reset(regForm: NgForm) {
    regForm.reset();

  }

}
