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
 * @interface RagAskRequest
 */
export interface RagAskRequest {
    /**
     * 
     * @type {number}
     * @memberof RagAskRequest
     */
    projectId: number;
    /**
     * 
     * @type {string}
     * @memberof RagAskRequest
     */
    prompt: string;
}

/**
 * Check if a given object implements the RagAskRequest interface.
 */
export function instanceOfRagAskRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "projectId" in value;
    isInstance = isInstance && "prompt" in value;

    return isInstance;
}

export function RagAskRequestFromJSON(json: any): RagAskRequest {
    return RagAskRequestFromJSONTyped(json, false);
}

export function RagAskRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): RagAskRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'projectId': json['project_id'],
        'prompt': json['prompt'],
    };
}

export function RagAskRequestToJSON(value?: RagAskRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'project_id': value.projectId,
        'prompt': value.prompt,
    };
}

