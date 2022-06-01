import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ExchangeRateComponent } from './exchange-rate/exchange-rate.component';
import { ChangeMoneyComponent } from './change-money/change-money.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JwtInterceptor } from './security/jwt.interceptor';


const appRoutes: Routes = [
  {
    path: 'exchange-rate',
    component: ExchangeRateComponent
  },
  {
    path: 'change-money',
    component: ChangeMoneyComponent
  },
  {
    path: '**',
    redirectTo: 'exchange-rate'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ExchangeRateComponent,
    ChangeMoneyComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
