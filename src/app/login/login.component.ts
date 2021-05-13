import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: User = {
    email: '',
    name: '',
    password: ''
  };

  constructor(private appService: AppService, 
    private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    this.appService.login(this.user).subscribe(res => {
      if(res) {
        this.router.navigateByUrl('/home');
      }
    });
  }
}
