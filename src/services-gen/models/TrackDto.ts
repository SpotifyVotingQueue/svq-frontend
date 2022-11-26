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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface TrackDto
 */
export interface TrackDto {
    /**
     * 
     * @type {string}
     * @memberof TrackDto
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof TrackDto
     */
    name?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof TrackDto
     */
    artists?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof TrackDto
     */
    coverUrl?: string;
}

/**
 * Check if a given object implements the TrackDto interface.
 */
export function instanceOfTrackDto(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TrackDtoFromJSON(json: any): TrackDto {
    return TrackDtoFromJSONTyped(json, false);
}

export function TrackDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): TrackDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'artists': !exists(json, 'artists') ? undefined : json['artists'],
        'coverUrl': !exists(json, 'coverUrl') ? undefined : json['coverUrl'],
    };
}

export function TrackDtoToJSON(value?: TrackDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'artists': value.artists,
        'coverUrl': value.coverUrl,
    };
}

