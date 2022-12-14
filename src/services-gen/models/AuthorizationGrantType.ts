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
 * @interface AuthorizationGrantType
 */
export interface AuthorizationGrantType {
    /**
     * 
     * @type {string}
     * @memberof AuthorizationGrantType
     */
    value?: string;
}

/**
 * Check if a given object implements the AuthorizationGrantType interface.
 */
export function instanceOfAuthorizationGrantType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AuthorizationGrantTypeFromJSON(json: any): AuthorizationGrantType {
    return AuthorizationGrantTypeFromJSONTyped(json, false);
}

export function AuthorizationGrantTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): AuthorizationGrantType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'value': !exists(json, 'value') ? undefined : json['value'],
    };
}

export function AuthorizationGrantTypeToJSON(value?: AuthorizationGrantType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'value': value.value,
    };
}

