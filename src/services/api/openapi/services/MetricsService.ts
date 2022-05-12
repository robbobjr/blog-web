/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PostAcessDto } from '../models/PostAcessDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class MetricsService {

    /**
     * @returns PostAcessDto 
     * @throws ApiError
     */
    public static postMetricsControllerFindAllPostAccess(): CancelablePromise<Array<PostAcessDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/posts/metrics/access',
        });
    }

}