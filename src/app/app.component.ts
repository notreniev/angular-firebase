import { AuthProviderService } from './services/auth-provider.service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'à tela de login';
  router: Router;

  constructor(router: Router, public auth: AuthProviderService) {
    this.router = router;
  }

  isRoot() { return this.router.url === '/' ? true : false; }


}
