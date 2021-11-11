import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CurrencyRequest } from './models/currency-request';
import { CurrencyResponse } from './models/currency-response';
import { environment } from '../environments/environment';
//import 'rxjs/add/observable/empty';

@Injectable()
export class CurrencyConverterService {
    //currencyRequest: CurrencyRequest;
    baseUrl = environment.currencyConverterApiUrl;

    constructor(private http: HttpClient) {
        /*this.currencyRequest = {
            to: '',
            from: '',
            amount: 0
        } */
    }

    convertCurrency(currencyRequest: CurrencyRequest): Observable<CurrencyResponse> {
        //this.currencyRequest = currencyRequest;

        //return this.http.get<{type: string, price: number}[]>('/assets/shipping.json');

        //CurrencyResponse

        let url = this.baseUrl + 'currencies';

        return this.http.post<CurrencyResponse>(url, 
                                                JSON.stringify(currencyRequest), 
                                                {
                                                    headers: {
                                                        'Content-Type': 'application/json'
                                                    }
                                                });
          /*.pipe(
            catchError(this.handleError('addHero', hero))
          );*/
    }

    /*private handleError(error: HttpErrorResponse) {
        if (error.status === 0) {
          // A client-side or network error occurred. Handle it accordingly.
          console.error('An error occurred:', error.error);
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong.
          console.error(
            `Backend returned code ${error.status}, body was: `, error.error);
        }
        // Return an observable with a user-facing error message.
        //return throwError('Something bad happened; please try again later.');
        return Observable.empty<CurrencyResponse>();
      }*/

  }