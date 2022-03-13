
import { Component } from '@angular/core';
import { AuthRequest, AuthResponse } from './api/models';
import { UsersService } from './api/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BCP-ExchangeRate-FrontEnd';

  constructor(
    private _usersService: UsersService
  ) { }

  ngOnInit(): void {

    const body: AuthRequest = {
      username: 'cvallejo',
      password: '123qwe'
    }

    this._usersService.apiVUsersAuthPost$Json({
      v: "1.0",
      body: body
    }).subscribe((res: AuthResponse) => {
      if (res) {
        localStorage.setItem('token', JSON.stringify(res.token));
      }
    });

  }
}
