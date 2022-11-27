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
import type { Href } from './Href';
import {
    HrefFromJSON,
    HrefFromJSONTyped,
    HrefToJSON,
} from './Href';

/**
 * 
 * @export
 * @interface PlaylistDto
 */
export interface PlaylistDto {
    /**
     * 
     * @type {string}
     * @memberof PlaylistDto
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof PlaylistDto
     */
    owner?: string;
    /**
     * 
     * @type {number}
     * @memberof PlaylistDto
     */
    numberTracks?: number;
    /**
     * 
     * @type {Href}
     * @memberof PlaylistDto
     */
    cover?: Href;
}

/**
 * Check if a given object implements the PlaylistDto interface.
 */
export function instanceOfPlaylistDto(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PlaylistDtoFromJSON(json: any): PlaylistDto {
    return PlaylistDtoFromJSONTyped(json, false);
}

export function PlaylistDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): PlaylistDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'owner': !exists(json, 'owner') ? undefined : json['owner'],
        'numberTracks': !exists(json, 'numberTracks') ? undefined : json['numberTracks'],
        'cover': !exists(json, 'cover') ? undefined : HrefFromJSON(json['cover']),
    };
}

export function PlaylistDtoToJSON(value?: PlaylistDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'owner': value.owner,
        'numberTracks': value.numberTracks,
        'cover': HrefToJSON(value.cover),
    };
}
