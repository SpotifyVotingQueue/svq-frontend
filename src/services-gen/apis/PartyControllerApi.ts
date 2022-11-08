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
  PartyCreatedDto,
} from '../models';
import {
    PartyCreatedDtoFromJSON,
    PartyCreatedDtoToJSON,
} from '../models';

export interface CreateRequest {
    accesscode: string;
}

/**
 * 
 */
export class PartyControllerApi extends runtime.BaseAPI {

    /**
     */
    async createRaw(requestParameters: CreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PartyCreatedDto>> {
        if (requestParameters.accesscode === null || requestParameters.accesscode === undefined) {
            throw new runtime.RequiredError('accesscode','Required parameter requestParameters.accesscode was null or undefined when calling create.');
        }

        const queryParameters: any = {};

        if (requestParameters.accesscode !== undefined) {
            queryParameters['accesscode'] = requestParameters.accesscode;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/party`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PartyCreatedDtoFromJSON(jsonValue));
    }

    /**
     */
    async create(requestParameters: CreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PartyCreatedDto> {
        const response = await this.createRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
