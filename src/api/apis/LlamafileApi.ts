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


import * as runtime from '../runtime';
import type {
  CheckLlamafileStatusRequest,
  DownloadLlamafileByNameRequest,
  HTTPValidationError,
} from '../models/index';
import {
    CheckLlamafileStatusRequestFromJSON,
    CheckLlamafileStatusRequestToJSON,
    DownloadLlamafileByNameRequestFromJSON,
    DownloadLlamafileByNameRequestToJSON,
    HTTPValidationErrorFromJSON,
    HTTPValidationErrorToJSON,
} from '../models/index';

export interface ApiStartLlamafileApiV1StartLlamafilePostRequest {
    downloadLlamafileByNameRequest: DownloadLlamafileByNameRequest;
}

export interface ApiStopLlamafileApiV1StopLlamafilePostRequest {
    downloadLlamafileByNameRequest: DownloadLlamafileByNameRequest;
}

export interface CheckLlamafileStatusApiV1CheckLlamafileStatusPostRequest {
    checkLlamafileStatusRequest: CheckLlamafileStatusRequest;
}

export interface DeleteLlamafileApiV1DeleteLlamafileDeleteRequest {
    downloadLlamafileByNameRequest: DownloadLlamafileByNameRequest;
}

export interface DownloadLlamafileByNameApiV1DownloadLlamafileByNamePostRequest {
    downloadLlamafileByNameRequest: DownloadLlamafileByNameRequest;
}

/**
 * 
 */
export class LlamafileApi extends runtime.BaseAPI {

    /**
     * Api Start Llamafile
     */
    async apiStartLlamafileApiV1StartLlamafilePostRaw(requestParameters: ApiStartLlamafileApiV1StartLlamafilePostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<any>> {
        if (requestParameters.downloadLlamafileByNameRequest === null || requestParameters.downloadLlamafileByNameRequest === undefined) {
            throw new runtime.RequiredError('downloadLlamafileByNameRequest','Required parameter requestParameters.downloadLlamafileByNameRequest was null or undefined when calling apiStartLlamafileApiV1StartLlamafilePost.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/v1/start_llamafile`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: DownloadLlamafileByNameRequestToJSON(requestParameters.downloadLlamafileByNameRequest),
        }, initOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<any>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     * Api Start Llamafile
     */
    async apiStartLlamafileApiV1StartLlamafilePost(requestParameters: ApiStartLlamafileApiV1StartLlamafilePostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<any> {
        const response = await this.apiStartLlamafileApiV1StartLlamafilePostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Api Stop Llamafile
     */
    async apiStopLlamafileApiV1StopLlamafilePostRaw(requestParameters: ApiStopLlamafileApiV1StopLlamafilePostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<any>> {
        if (requestParameters.downloadLlamafileByNameRequest === null || requestParameters.downloadLlamafileByNameRequest === undefined) {
            throw new runtime.RequiredError('downloadLlamafileByNameRequest','Required parameter requestParameters.downloadLlamafileByNameRequest was null or undefined when calling apiStopLlamafileApiV1StopLlamafilePost.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/v1/stop_llamafile`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: DownloadLlamafileByNameRequestToJSON(requestParameters.downloadLlamafileByNameRequest),
        }, initOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<any>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     * Api Stop Llamafile
     */
    async apiStopLlamafileApiV1StopLlamafilePost(requestParameters: ApiStopLlamafileApiV1StopLlamafilePostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<any> {
        const response = await this.apiStopLlamafileApiV1StopLlamafilePostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Check Llamafile Status
     */
    async checkLlamafileStatusApiV1CheckLlamafileStatusPostRaw(requestParameters: CheckLlamafileStatusApiV1CheckLlamafileStatusPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<any>> {
        if (requestParameters.checkLlamafileStatusRequest === null || requestParameters.checkLlamafileStatusRequest === undefined) {
            throw new runtime.RequiredError('checkLlamafileStatusRequest','Required parameter requestParameters.checkLlamafileStatusRequest was null or undefined when calling checkLlamafileStatusApiV1CheckLlamafileStatusPost.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/v1/check_llamafile_status`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CheckLlamafileStatusRequestToJSON(requestParameters.checkLlamafileStatusRequest),
        }, initOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<any>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     * Check Llamafile Status
     */
    async checkLlamafileStatusApiV1CheckLlamafileStatusPost(requestParameters: CheckLlamafileStatusApiV1CheckLlamafileStatusPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<any> {
        const response = await this.checkLlamafileStatusApiV1CheckLlamafileStatusPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Delete Llamafile
     */
    async deleteLlamafileApiV1DeleteLlamafileDeleteRaw(requestParameters: DeleteLlamafileApiV1DeleteLlamafileDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<any>> {
        if (requestParameters.downloadLlamafileByNameRequest === null || requestParameters.downloadLlamafileByNameRequest === undefined) {
            throw new runtime.RequiredError('downloadLlamafileByNameRequest','Required parameter requestParameters.downloadLlamafileByNameRequest was null or undefined when calling deleteLlamafileApiV1DeleteLlamafileDelete.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/v1/delete_llamafile`,
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
            body: DownloadLlamafileByNameRequestToJSON(requestParameters.downloadLlamafileByNameRequest),
        }, initOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<any>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     * Delete Llamafile
     */
    async deleteLlamafileApiV1DeleteLlamafileDelete(requestParameters: DeleteLlamafileApiV1DeleteLlamafileDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<any> {
        const response = await this.deleteLlamafileApiV1DeleteLlamafileDeleteRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Download Llamafile By Name
     */
    async downloadLlamafileByNameApiV1DownloadLlamafileByNamePostRaw(requestParameters: DownloadLlamafileByNameApiV1DownloadLlamafileByNamePostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<any>> {
        if (requestParameters.downloadLlamafileByNameRequest === null || requestParameters.downloadLlamafileByNameRequest === undefined) {
            throw new runtime.RequiredError('downloadLlamafileByNameRequest','Required parameter requestParameters.downloadLlamafileByNameRequest was null or undefined when calling downloadLlamafileByNameApiV1DownloadLlamafileByNamePost.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/v1/download_llamafile_by_name`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: DownloadLlamafileByNameRequestToJSON(requestParameters.downloadLlamafileByNameRequest),
        }, initOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<any>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     * Download Llamafile By Name
     */
    async downloadLlamafileByNameApiV1DownloadLlamafileByNamePost(requestParameters: DownloadLlamafileByNameApiV1DownloadLlamafileByNamePostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<any> {
        const response = await this.downloadLlamafileByNameApiV1DownloadLlamafileByNamePostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * List Llamafiles
     */
    async listLlamafilesApiV1ListLlamafilesGetRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<any>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/list_llamafiles`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<any>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     * List Llamafiles
     */
    async listLlamafilesApiV1ListLlamafilesGet(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<any> {
        const response = await this.listLlamafilesApiV1ListLlamafilesGetRaw(initOverrides);
        return await response.value();
    }

}
