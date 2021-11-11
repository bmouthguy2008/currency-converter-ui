import { Component, OnInit  } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { CurrencyConverterService } from './currency-converter.service';
import { CurrencyRequest } from './models/currency-request';
import { CurrencyResponse } from './models/currency-response';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {//implements OnInit {
  title = 'Currency Converter';
  currencies: any = ['USD', 'GBP', 'EUR'];

  form: FormGroup = this.formBuilder.group({
    fromCurrency: new FormControl('USD'),
    toCurrency: new FormControl('USD'),
    fromCurrencyAmount: new FormControl('0'),
    toCurrencyAmount: new FormControl('0')
  });

  constructor(private currencyConverterService: CurrencyConverterService,
              private formBuilder: FormBuilder){
  }

  /*ngOnInit() {
    this.form = this.formBuilder.group({
      fromCurrency: new FormControl('USD'),
      toCurrency: new FormControl('USD'),
      fromCurrencyAmount: new FormControl('0'),
      toCurrencyAmount: new FormControl('0')
    });
  }*/

  submit(){
    console.log(this.form.value);
    console.log(this.form.value.fromCurrency);
    console.log(this.form.value.toCurrency);
    console.log(this.form.value.fromCurrencyAmount);
    console.log(this.form.value.toCurrencyAmount);

    var currencyRequest:CurrencyRequest = {
      to: this.form.value.toCurrency,
      from: this.form.value.fromCurrency,
      amount: this.form.value.fromCurrencyAmount
    };

    //this.currencyConverterService.convertCurrency(currencyRequest).subscribe(currencyResponse => this.form.value.toCurrencyAmount = currencyResponse.rate);
    //this.currencyConverterService.convertCurrency(currencyRequest).subscribe(currencyResponse => console.log('Rate from API: ' + currencyResponse.rate));
    this.currencyConverterService.convertCurrency(currencyRequest).subscribe(currencyResponse => this.form.patchValue({
                                                                                                                        toCurrencyAmount: currencyResponse.rate
                                                                                                                      }));
    //this.form.value.toCurrencyAmount = 100;
    //console.log('After: ' + this.form.value.toCurrencyAmount);

  }
}
