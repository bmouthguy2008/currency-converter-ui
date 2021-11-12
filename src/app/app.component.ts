import { Component  } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { CurrencyConverterService } from './currency-converter.service';
import { CurrencyRequest } from './models/currency-request';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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

  submit(){
    var currencyRequest:CurrencyRequest = {
      to: this.form.value.toCurrency,
      from: this.form.value.fromCurrency,
      amount: this.form.value.fromCurrencyAmount
    };

    this.currencyConverterService.convertCurrency(currencyRequest).subscribe(currencyResponse => this.form.patchValue({
                                                                                                                        toCurrencyAmount: currencyResponse.rate
                                                                                                                      }));
  }
}
