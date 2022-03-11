/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { GetExchangeRateDtoWebApiResponse } from '../models/get-exchange-rate-dto-web-api-response';
import { PostExchangeRateDto } from '../models/post-exchange-rate-dto';
import { PostExchangeRateDtoWebApiResponse } from '../models/post-exchange-rate-dto-web-api-response';

@Injectable({
  providedIn: 'root',
})
export class ExchangeRatesService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiVExchangeRatesGet
   */
  static readonly ApiVExchangeRatesGetPath = '/api/{v}/ExchangeRates';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiVExchangeRatesGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiVExchangeRatesGet$Plain$Response(params: {
    originCurrency?: string;
    destinationCurrency?: string;
    amount?: number;
    'v': string;
  }): Observable<StrictHttpResponse<GetExchangeRateDtoWebApiResponse>> {

    const rb = new RequestBuilder(this.rootUrl, ExchangeRatesService.ApiVExchangeRatesGetPath, 'get');
    if (params) {
      rb.query('originCurrency', params.originCurrency, {});
      rb.query('destinationCurrency', params.destinationCurrency, {});
      rb.query('amount', params.amount, {});
      rb.path('v', params['v'], {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<GetExchangeRateDtoWebApiResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiVExchangeRatesGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiVExchangeRatesGet$Plain(params: {
    originCurrency?: string;
    destinationCurrency?: string;
    amount?: number;
    'v': string;
  }): Observable<GetExchangeRateDtoWebApiResponse> {

    return this.apiVExchangeRatesGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<GetExchangeRateDtoWebApiResponse>) => r.body as GetExchangeRateDtoWebApiResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiVExchangeRatesGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiVExchangeRatesGet$Json$Response(params: {
    originCurrency?: string;
    destinationCurrency?: string;
    amount?: number;
    'v': string;
  }): Observable<StrictHttpResponse<GetExchangeRateDtoWebApiResponse>> {

    const rb = new RequestBuilder(this.rootUrl, ExchangeRatesService.ApiVExchangeRatesGetPath, 'get');
    if (params) {
      rb.query('originCurrency', params.originCurrency, {});
      rb.query('destinationCurrency', params.destinationCurrency, {});
      rb.query('amount', params.amount, {});
      rb.path('v', params['v'], {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<GetExchangeRateDtoWebApiResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiVExchangeRatesGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiVExchangeRatesGet$Json(params: {
    originCurrency?: string;
    destinationCurrency?: string;
    amount?: number;
    'v': string;
  }): Observable<GetExchangeRateDtoWebApiResponse> {

    return this.apiVExchangeRatesGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<GetExchangeRateDtoWebApiResponse>) => r.body as GetExchangeRateDtoWebApiResponse)
    );
  }

  /**
   * Path part for operation apiVExchangeRatesPost
   */
  static readonly ApiVExchangeRatesPostPath = '/api/{v}/ExchangeRates';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiVExchangeRatesPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiVExchangeRatesPost$Plain$Response(params: {
    'v': string;
    body?: PostExchangeRateDto
  }): Observable<StrictHttpResponse<PostExchangeRateDtoWebApiResponse>> {

    const rb = new RequestBuilder(this.rootUrl, ExchangeRatesService.ApiVExchangeRatesPostPath, 'post');
    if (params) {
      rb.path('v', params['v'], {});
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PostExchangeRateDtoWebApiResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiVExchangeRatesPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiVExchangeRatesPost$Plain(params: {
    'v': string;
    body?: PostExchangeRateDto
  }): Observable<PostExchangeRateDtoWebApiResponse> {

    return this.apiVExchangeRatesPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<PostExchangeRateDtoWebApiResponse>) => r.body as PostExchangeRateDtoWebApiResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiVExchangeRatesPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiVExchangeRatesPost$Json$Response(params: {
    'v': string;
    body?: PostExchangeRateDto
  }): Observable<StrictHttpResponse<PostExchangeRateDtoWebApiResponse>> {

    const rb = new RequestBuilder(this.rootUrl, ExchangeRatesService.ApiVExchangeRatesPostPath, 'post');
    if (params) {
      rb.path('v', params['v'], {});
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PostExchangeRateDtoWebApiResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiVExchangeRatesPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiVExchangeRatesPost$Json(params: {
    'v': string;
    body?: PostExchangeRateDto
  }): Observable<PostExchangeRateDtoWebApiResponse> {

    return this.apiVExchangeRatesPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<PostExchangeRateDtoWebApiResponse>) => r.body as PostExchangeRateDtoWebApiResponse)
    );
  }

}
