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

import { AuthRequest } from '../models/auth-request';
import { AuthResponse } from '../models/auth-response';

@Injectable({
  providedIn: 'root',
})
export class UsersService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiVUsersAuthPost
   */
  static readonly ApiVUsersAuthPostPath = '/api/{v}/Users/Auth';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiVUsersAuthPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiVUsersAuthPost$Plain$Response(params: {
    'v': string;
    body?: AuthRequest
  }): Observable<StrictHttpResponse<AuthResponse>> {

    const rb = new RequestBuilder(this.rootUrl, UsersService.ApiVUsersAuthPostPath, 'post');
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
        return r as StrictHttpResponse<AuthResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiVUsersAuthPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiVUsersAuthPost$Plain(params: {
    'v': string;
    body?: AuthRequest
  }): Observable<AuthResponse> {

    return this.apiVUsersAuthPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<AuthResponse>) => r.body as AuthResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiVUsersAuthPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiVUsersAuthPost$Json$Response(params: {
    'v': string;
    body?: AuthRequest
  }): Observable<StrictHttpResponse<AuthResponse>> {

    const rb = new RequestBuilder(this.rootUrl, UsersService.ApiVUsersAuthPostPath, 'post');
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
        return r as StrictHttpResponse<AuthResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiVUsersAuthPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiVUsersAuthPost$Json(params: {
    'v': string;
    body?: AuthRequest
  }): Observable<AuthResponse> {

    return this.apiVUsersAuthPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<AuthResponse>) => r.body as AuthResponse)
    );
  }

}
