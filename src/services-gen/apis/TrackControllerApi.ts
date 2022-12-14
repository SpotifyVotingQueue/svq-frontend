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
  TrackDto,
} from '../models';
import {
    TrackDtoFromJSON,
    TrackDtoToJSON,
} from '../models';

export interface GetRecommendationsRequest {
    partyId: string;
}

export interface GetTrackRequest {
    id: string;
}

export interface GetTrackCoverRequest {
    id: string;
    maxHeight: number;
    minHeight: number;
}

export interface SearchTracksRequest {
    query: string;
    partyId: string;
}

/**
 * 
 */
export class TrackControllerApi extends runtime.BaseAPI {

    /**
     * Get recommended songs
     */
    async getRecommendationsRaw(requestParameters: GetRecommendationsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<TrackDto>>> {
        if (requestParameters.partyId === null || requestParameters.partyId === undefined) {
            throw new runtime.RequiredError('partyId','Required parameter requestParameters.partyId was null or undefined when calling getRecommendations.');
        }

        const queryParameters: any = {};

        if (requestParameters.partyId !== undefined) {
            queryParameters['partyId'] = requestParameters.partyId;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/recommendations`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(TrackDtoFromJSON));
    }

    /**
     * Get recommended songs
     */
    async getRecommendations(requestParameters: GetRecommendationsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<TrackDto>> {
        const response = await this.getRecommendationsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get information for a track
     */
    async getTrackRaw(requestParameters: GetTrackRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TrackDto>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getTrack.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/track/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TrackDtoFromJSON(jsonValue));
    }

    /**
     * Get information for a track
     */
    async getTrack(requestParameters: GetTrackRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TrackDto> {
        const response = await this.getTrackRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get cover art for a track
     */
    async getTrackCoverRaw(requestParameters: GetTrackCoverRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<string>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getTrackCover.');
        }

        if (requestParameters.maxHeight === null || requestParameters.maxHeight === undefined) {
            throw new runtime.RequiredError('maxHeight','Required parameter requestParameters.maxHeight was null or undefined when calling getTrackCover.');
        }

        if (requestParameters.minHeight === null || requestParameters.minHeight === undefined) {
            throw new runtime.RequiredError('minHeight','Required parameter requestParameters.minHeight was null or undefined when calling getTrackCover.');
        }

        const queryParameters: any = {};

        if (requestParameters.maxHeight !== undefined) {
            queryParameters['maxHeight'] = requestParameters.maxHeight;
        }

        if (requestParameters.minHeight !== undefined) {
            queryParameters['minHeight'] = requestParameters.minHeight;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/track/{id}/cover`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     * Get cover art for a track
     */
    async getTrackCover(requestParameters: GetTrackCoverRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<string> {
        const response = await this.getTrackCoverRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Search for tracks by name
     */
    async searchTracksRaw(requestParameters: SearchTracksRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<TrackDto>>> {
        if (requestParameters.query === null || requestParameters.query === undefined) {
            throw new runtime.RequiredError('query','Required parameter requestParameters.query was null or undefined when calling searchTracks.');
        }

        if (requestParameters.partyId === null || requestParameters.partyId === undefined) {
            throw new runtime.RequiredError('partyId','Required parameter requestParameters.partyId was null or undefined when calling searchTracks.');
        }

        const queryParameters: any = {};

        if (requestParameters.partyId !== undefined) {
            queryParameters['partyId'] = requestParameters.partyId;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/search/{query}`.replace(`{${"query"}}`, encodeURIComponent(String(requestParameters.query))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(TrackDtoFromJSON));
    }

    /**
     * Search for tracks by name
     */
    async searchTracks(requestParameters: SearchTracksRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<TrackDto>> {
        const response = await this.searchTracksRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
