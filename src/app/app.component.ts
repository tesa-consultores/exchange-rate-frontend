import { Component } from '@angular/core';
import { GetExchangeRateDto, GetExchangeRateDtoWebApiResponse } from './api/models';
import { ExchangeRatesService } from './api/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BCP-ExchangeRate-FrontEnd';


  exchangeRate: GetExchangeRateDto;

  constructor(
    private _exchangeRatesService: ExchangeRatesService
  ) {

    this.exchangeRate = {};
  }

  ngOnInit(): void {
    this.getAll('USD', 'PEN', 100);
  }

  getAll(originCurrency: string, destinationCurrency: string, amount: number) {
    this._exchangeRatesService.apiVExchangeRatesGet$Json({
      v: "1.0",
      originCurrency: originCurrency,
      destinationCurrency: destinationCurrency,
      amount: amount
    }).subscribe((res: GetExchangeRateDtoWebApiResponse) => {

      //this.exchangeRate = res.response?.data[0];
    });
  }



}
