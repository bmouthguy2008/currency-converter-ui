import { CurrencyError } from './currency-error';

export interface CurrencyResponse {
    success: boolean;
    rate: number;
    errors: CurrencyError[];
  }