import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GetExchangeRateDto, GetExchangeRateDtoWebApiResponse } from '../api/models';
import { ExchangeRatesService } from '../api/services';

@Component({
  selector: 'app-change-money',
  templateUrl: './change-money.component.html',
  styleUrls: ['./change-money.component.css']
})
export class ChangeMoneyComponent implements OnInit {

  changeMoneyForm!: FormGroup;

  exchangeRate: GetExchangeRateDto = {};

  constructor(
    private _exchangeRatesService: ExchangeRatesService,
    private _formBuilder: FormBuilder
  ) {

  }

  ngOnInit(): void {
    this.changeMoneyForm = this.createChangeMoneyForm();
  }

  createChangeMoneyForm(): FormGroup {
    return this._formBuilder.group({
      originCurrency: ['', [Validators.required]],
      destinationCurrency: ['', [Validators.required]],
      amount: [0, [Validators.required]]
    });
  }

  changeMoney(): void {
    if (this.changeMoneyForm.invalid) {
      this.changeMoneyForm.markAllAsTouched();
      return;
    }

    this._exchangeRatesService.apiVExchangeRatesGet$Json({
      v: "1.0",
      originCurrency: this.changeMoneyForm.get("originCurrency")?.value,
      destinationCurrency: this.changeMoneyForm.get("destinationCurrency")?.value,
      amount: this.changeMoneyForm.get("amount")?.value
    }).subscribe((res: GetExchangeRateDtoWebApiResponse) => {
      if (res.response?.data) {
        this.exchangeRate = res.response.data[0];
      }
    });
  }

  cancel(): void {
    this.changeMoneyForm.reset();
  }
}
