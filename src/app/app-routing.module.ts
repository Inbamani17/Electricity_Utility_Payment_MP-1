import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { BillComponent } from './bill/bill.component';
import { HomeComponent } from './home/home.component';
import { PaymentComponent } from './payment/payment.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { UserloginComponent } from './userlogin/userlogin.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'userlogin', component:UserloginComponent},
  {path:'user-register', component:UserRegisterComponent},
  {path:'user-dashboard', component:UserDashboardComponent},
  {path:'admin-login', component:AdminLoginComponent},
  {path:'admin-dashboard', component:AdminDashboardComponent},
  {path:'payment', component:PaymentComponent},
  {path:'bill', component:BillComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
