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
  AddTrackResponseDto,
  PartyCreatedDto,
  TrackDto,
} from '../models';
import {
    AddTrackResponseDtoFromJSON,
    AddTrackResponseDtoToJSON,
    PartyCreatedDtoFromJSON,
    PartyCreatedDtoToJSON,
    TrackDtoFromJSON,
    TrackDtoToJSON,
} from '../models';

export interface AddTrackToQueueRequest {
    id: string;
    trackId: string;
}

export interface CreateRequest {
    accesscode: string;
}

export interface DownvoteTrackRequest {
    id: string;
    trackId: string;
}

export interface GetQueueRequest {
    id: string;
}

export interface UpvoteTrackRequest {
    id: string;
    trackId: string;
}

/**
 * 
 */
export class PartyControllerApi extends runtime.BaseAPI {

    /**
     */
    async addTrackToQueueRaw(requestParameters: AddTrackToQueueRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AddTrackResponseDto>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling addTrackToQueue.');
        }

        if (requestParameters.trackId === null || requestParameters.trackId === undefined) {
            throw new runtime.RequiredError('trackId','Required parameter requestParameters.trackId was null or undefined when calling addTrackToQueue.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/party/queue/{id}/track/{trackId}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))).replace(`{${"trackId"}}`, encodeURIComponent(String(requestParameters.trackId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AddTrackResponseDtoFromJSON(jsonValue));
    }

    /**
     */
    async addTrackToQueue(requestParameters: AddTrackToQueueRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AddTrackResponseDto> {
        const response = await this.addTrackToQueueRaw(requestParameters, initOverrides);
        return await response.value();
    }

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

    /**
     */
    async downvoteTrackRaw(requestParameters: DownvoteTrackRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling downvoteTrack.');
        }

        if (requestParameters.trackId === null || requestParameters.trackId === undefined) {
            throw new runtime.RequiredError('trackId','Required parameter requestParameters.trackId was null or undefined when calling downvoteTrack.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/party/queue/{id}/track/{trackId}/downvote`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))).replace(`{${"trackId"}}`, encodeURIComponent(String(requestParameters.trackId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async downvoteTrack(requestParameters: DownvoteTrackRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.downvoteTrackRaw(requestParameters, initOverrides);
    }

    /**
     */
    async getQueueRaw(requestParameters: GetQueueRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<TrackDto>>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getQueue.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/party/queue/{id}/tracks`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(TrackDtoFromJSON));
    }

    /**
     */
    async getQueue(requestParameters: GetQueueRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<TrackDto>> {
        const response = await this.getQueueRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async upvoteTrackRaw(requestParameters: UpvoteTrackRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling upvoteTrack.');
        }

        if (requestParameters.trackId === null || requestParameters.trackId === undefined) {
            throw new runtime.RequiredError('trackId','Required parameter requestParameters.trackId was null or undefined when calling upvoteTrack.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/party/queue/{id}/track/{trackId}/upvote`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))).replace(`{${"trackId"}}`, encodeURIComponent(String(requestParameters.trackId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async upvoteTrack(requestParameters: UpvoteTrackRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.upvoteTrackRaw(requestParameters, initOverrides);
    }

}
