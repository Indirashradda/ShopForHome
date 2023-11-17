import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  username:any;

  constructor(public auth:AuthService,private toastr: ToastrService) {
  }


  logout() {
   
    this.auth.logout()
    this.toastr.success('successfully logged out');
  }

}