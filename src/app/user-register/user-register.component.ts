import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormGroup,FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  public registerform!: FormGroup;
  constructor(
    private FormBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    //form controller
    this.registerform = this.FormBuilder.group({
      username: [''],
      email: [''],
      password: [''],
      cpassword: [''],
      EBNo: [''],
      MobNo: [''],
      addr: [''],
      state: [''],
      city: ['']
    });
  }
  register() {
    //post call to store objects
    this.http
      .post<any>('http://localhost:3000/users', this.registerform.value)
      .subscribe(
        (res) => {
          alert('register Successfull');
          this.registerform.reset();
          this.router.navigate(['userlogin']);
        },
        (err) => alert('Please enter the correct details')
      );
  }
}
