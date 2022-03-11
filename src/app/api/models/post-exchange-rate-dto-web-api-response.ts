/* tslint:disable */
/* eslint-disable */
import { Error } from './error';
import { PostExchangeRateDtoResponse } from './post-exchange-rate-dto-response';
export interface PostExchangeRateDtoWebApiResponse {
  errors?: null | Array<Error>;
  response?: PostExchangeRateDtoResponse;
  success?: boolean;
}
