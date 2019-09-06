import { Model } from './../model/model';
import { Component, OnInit } from '@angular/core';
import { AuthProviderService } from '../services/auth-provider.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  email: string;
  password: string;
  user = new Model(this.email, this.password);

  constructor(private auth: AuthProviderService) {
  }

  ngOnInit() {
  }

  async login(model: Model) {
    event.preventDefault();

    try {
      const res = await this.auth.signIn(new Model(this.user.email, this.user.password));
    } catch (error) {
      console.dir(error);
    }
  }

  logout() {
    const res = this.auth.signOut();
  }
}
