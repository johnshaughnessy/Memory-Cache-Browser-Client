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
 * @interface DeleteFileRequest
 */
export interface DeleteFileRequest {
    /**
     * 
     * @type {string}
     * @memberof DeleteFileRequest
     */
    projectName: string;
    /**
     * 
     * @type {string}
     * @memberof DeleteFileRequest
     */
    filePath: string;
}

/**
 * Check if a given object implements the DeleteFileRequest interface.
 */
export function instanceOfDeleteFileRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "projectName" in value;
    isInstance = isInstance && "filePath" in value;

    return isInstance;
}

export function DeleteFileRequestFromJSON(json: any): DeleteFileRequest {
    return DeleteFileRequestFromJSONTyped(json, false);
}

export function DeleteFileRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): DeleteFileRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'projectName': json['project_name'],
        'filePath': json['file_path'],
    };
}

export function DeleteFileRequestToJSON(value?: DeleteFileRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'project_name': value.projectName,
        'file_path': value.filePath,
    };
}
