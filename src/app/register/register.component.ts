import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { User } from '../models/user.model';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public user: User = {
    email: '',
    name: '',
    password: ''
  };

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.appService.getUsers().pipe(take(1))
      .subscribe( users => {
        console.log(users);
      })
  }

  createAccount() {
    console.log(this.user);
    const newUser: User = {
      email: this.user.email,
      name: this.user.name,
      password: this.user.password
    };
    this.appService.addUser(newUser).subscribe();
  }

}
