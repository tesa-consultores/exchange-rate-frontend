/* tslint:disable */
/* eslint-disable */
import { Error } from './error';
import { GetExchangeRateDtoResponse } from './get-exchange-rate-dto-response';
export interface GetExchangeRateDtoWebApiResponse {
  errors?: null | Array<Error>;
  response?: GetExchangeRateDtoResponse;
  success?: boolean;
}
