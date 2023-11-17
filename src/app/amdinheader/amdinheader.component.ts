import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-amdinheader',
  templateUrl: './amdinheader.component.html',
  styleUrls: ['./amdinheader.component.css']
})
export class AmdinheaderComponent {
  admin:any
  constructor(public _auth:AuthService){
  }
  logout() {
    this._auth.logout()
  }


}


