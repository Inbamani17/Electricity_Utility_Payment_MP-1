import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormGroup,FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {
  public billform!: FormGroup;
  constructor(
    private FormBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    //form controller
    this.billform = this.FormBuilder.group({
      ebno: [''],
      units: [''],
      Amount: ['']
    });
  }
  bill() {
    //post call to store objects
    this.http
      .post<any>('http://localhost:3000/bill', this.billform.value)
      .subscribe(
        (res) => {
          alert('Bill Created Successfully');
          this.billform.reset();
          this.router.navigate(['admin-dashboard']);
        },
        (err) => alert('please enter the correct details')
      );
  }
}
