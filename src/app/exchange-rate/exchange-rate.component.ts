import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostExchangeRateDto, PostExchangeRateDtoWebApiResponse } from '../api/models';
import { ExchangeRatesService } from '../api/services';

@Component({
  selector: 'app-exchange-rate',
  templateUrl: './exchange-rate.component.html',
  styleUrls: ['./exchange-rate.component.css']
})
export class ExchangeRateComponent implements OnInit {

  exchangeRateForm!: FormGroup;

  exchangeRate: PostExchangeRateDto = {};

  moneys: Array<string> = [
    "EUR",
    "GBP"
  ];

  constructor(
    private _exchangeRatesService: ExchangeRatesService,
    private _formBuilder: FormBuilder
  ) {

  }

  ngOnInit(): void {
    this.exchangeRateForm = this.createExchangeRateForm();
  }

  createExchangeRateForm(): FormGroup {
    return this._formBuilder.group({
      originCurrency: ['', [Validators.required]],
      destinationCurrency: ['', [Validators.required]],
      exchangeRate: [0, [Validators.required]]
    });
  }

  save(): void {
    if (this.exchangeRateForm.invalid) {
      this.exchangeRateForm.markAllAsTouched();
      return;
    }

    const body: PostExchangeRateDto = {
      originCurrency: this.exchangeRateForm.get("originCurrency")?.value,
      destinationCurrency: this.exchangeRateForm.get("destinationCurrency")?.value,
      exchangeRate: this.exchangeRateForm.get("exchangeRate")?.value
    }

    this._exchangeRatesService.apiVExchangeRatesPost$Json({
      v: "1.0",
      body: body
    }).subscribe((res: PostExchangeRateDtoWebApiResponse) => {
      if (res.response?.data) {
        this.exchangeRate = res.response.data[0];
      }
    });
  }

  cancel(): void {
    this.exchangeRateForm.reset();
  }
}
