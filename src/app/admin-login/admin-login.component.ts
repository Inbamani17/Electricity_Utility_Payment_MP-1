import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  public loginform !:FormGroup
  constructor(private formbuilder: FormBuilder,private http : HttpClient,private router : Router) { }

  ngOnInit(): void {
  this.loginform=this.formbuilder.group({
    username:[''],
    password:['']
  })
  }
  login(){
    this.http.get<any>("http://localhost:3000/admin")
    .subscribe(res => {
      const user = res.find((a:any)=>{
        return a.username === this.loginform.value.username && a.password === this.loginform.value.password 
      });
      if(user){
        alert("login success")
        this.loginform.reset();
        this.router.navigate(['admin-dashboard']);
      }else{
        alert("Invalid Username or Password")
      }
    },err =>{
      alert("404 error")
    })
  }

}
