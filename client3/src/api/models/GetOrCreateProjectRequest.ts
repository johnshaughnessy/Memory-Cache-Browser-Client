/* tslint:disable */
/* eslint-disable */
/**
 * Memory Cache Hub
 * A backend server for Memory Cache.
 *
 * The version of the OpenAPI document: 0.1.0
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
 * @interface GetOrCreateProjectRequest
 */
export interface GetOrCreateProjectRequest {
    /**
     * 
     * @type {string}
     * @memberof GetOrCreateProjectRequest
     */
    projectName: string;
}

/**
 * Check if a given object implements the GetOrCreateProjectRequest interface.
 */
export function instanceOfGetOrCreateProjectRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "projectName" in value;

    return isInstance;
}

export function GetOrCreateProjectRequestFromJSON(json: any): GetOrCreateProjectRequest {
    return GetOrCreateProjectRequestFromJSONTyped(json, false);
}

export function GetOrCreateProjectRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetOrCreateProjectRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'projectName': json['project_name'],
    };
}

export function GetOrCreateProjectRequestToJSON(value?: GetOrCreateProjectRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'project_name': value.projectName,
    };
}
