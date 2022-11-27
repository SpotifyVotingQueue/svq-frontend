/* tslint:disable */
/* eslint-disable */
/**
 * OpenAPI definition
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  OAuth2AuthorizedClient,
  OAuth2User,
  TextDto,
  UserDto,
} from '../models';
import {
    OAuth2AuthorizedClientFromJSON,
    OAuth2AuthorizedClientToJSON,
    OAuth2UserFromJSON,
    OAuth2UserToJSON,
    TextDtoFromJSON,
    TextDtoToJSON,
    UserDtoFromJSON,
    UserDtoToJSON,
} from '../models';

export interface SecretsRequest {
    authorizedClient: OAuth2AuthorizedClient;
}

export interface UserRequest {
    oAuth2User?: OAuth2User;
}

export interface User1Request {
    oAuth2User?: OAuth2User;
}

export interface User2Request {
    oAuth2User?: OAuth2User;
}

export interface User3Request {
    oAuth2User?: OAuth2User;
}

export interface User4Request {
    principal: OAuth2User;
}

export interface User5Request {
    oAuth2User?: OAuth2User;
}

export interface User6Request {
    oAuth2User?: OAuth2User;
}

/**
 * 
 */
export class TestControllerApi extends runtime.BaseAPI {

    /**
     * Get information about the current user
     */
    async meRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UserDto>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/user/me`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UserDtoFromJSON(jsonValue));
    }

    /**
     * Get information about the current user
     */
    async me(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UserDto> {
        const response = await this.meRaw(initOverrides);
        return await response.value();
    }

    /**
     * Ping the server
     */
    async pingRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TextDto>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/ping`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TextDtoFromJSON(jsonValue));
    }

    /**
     * Ping the server
     */
    async ping(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TextDto> {
        const response = await this.pingRaw(initOverrides);
        return await response.value();
    }

    /**
     * Steal the current user\'s secrets
     */
    async secretsRaw(requestParameters: SecretsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<string>> {
        if (requestParameters.authorizedClient === null || requestParameters.authorizedClient === undefined) {
            throw new runtime.RequiredError('authorizedClient','Required parameter requestParameters.authorizedClient was null or undefined when calling secrets.');
        }

        const queryParameters: any = {};

        if (requestParameters.authorizedClient !== undefined) {
            queryParameters['authorizedClient'] = requestParameters.authorizedClient;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/user/secrets`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     * Steal the current user\'s secrets
     */
    async secrets(requestParameters: SecretsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<string> {
        const response = await this.secretsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async userRaw(requestParameters: UserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<{ [key: string]: object; }>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/v1/user`,
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: OAuth2UserToJSON(requestParameters.oAuth2User),
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     */
    async user(requestParameters: UserRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<{ [key: string]: object; }> {
        const response = await this.userRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async user1Raw(requestParameters: User1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<{ [key: string]: object; }>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/v1/user`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: OAuth2UserToJSON(requestParameters.oAuth2User),
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     */
    async user1(requestParameters: User1Request = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<{ [key: string]: object; }> {
        const response = await this.user1Raw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async user2Raw(requestParameters: User2Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<{ [key: string]: object; }>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/v1/user`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: OAuth2UserToJSON(requestParameters.oAuth2User),
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     */
    async user2(requestParameters: User2Request = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<{ [key: string]: object; }> {
        const response = await this.user2Raw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async user3Raw(requestParameters: User3Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<{ [key: string]: object; }>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/v1/user`,
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
            body: OAuth2UserToJSON(requestParameters.oAuth2User),
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     */
    async user3(requestParameters: User3Request = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<{ [key: string]: object; }> {
        const response = await this.user3Raw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async user4Raw(requestParameters: User4Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<{ [key: string]: object; }>> {
        if (requestParameters.principal === null || requestParameters.principal === undefined) {
            throw new runtime.RequiredError('principal','Required parameter requestParameters.principal was null or undefined when calling user4.');
        }

        const queryParameters: any = {};

        if (requestParameters.principal !== undefined) {
            queryParameters['principal'] = requestParameters.principal;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/user`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     */
    async user4(requestParameters: User4Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<{ [key: string]: object; }> {
        const response = await this.user4Raw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async user5Raw(requestParameters: User5Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<{ [key: string]: object; }>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/v1/user`,
            method: 'OPTIONS',
            headers: headerParameters,
            query: queryParameters,
            body: OAuth2UserToJSON(requestParameters.oAuth2User),
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     */
    async user5(requestParameters: User5Request = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<{ [key: string]: object; }> {
        const response = await this.user5Raw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async user6Raw(requestParameters: User6Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<{ [key: string]: object; }>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/v1/user`,
            method: 'HEAD',
            headers: headerParameters,
            query: queryParameters,
            body: OAuth2UserToJSON(requestParameters.oAuth2User),
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     */
    async user6(requestParameters: User6Request = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<{ [key: string]: object; }> {
        const response = await this.user6Raw(requestParameters, initOverrides);
        return await response.value();
    }

}
