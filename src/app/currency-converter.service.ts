import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CurrencyRequest } from './models/currency-request';
import { CurrencyResponse } from './models/currency-response';
import { environment } from '../environments/environment';

@Injectable()
export class CurrencyConverterService {
    
    baseUrl = environment.currencyConverterApiUrl;

    constructor(private http: HttpClient) {
    }

    convertCurrency(currencyRequest: CurrencyRequest): Observable<CurrencyResponse> {

        let url = this.baseUrl + 'currencies';

        return this.http.post<CurrencyResponse>(url, 
                                                JSON.stringify(currencyRequest), 
                                                {
                                                    headers: {
                                                        'Content-Type': 'application/json'
                                                    }
                                                });
    }
  }