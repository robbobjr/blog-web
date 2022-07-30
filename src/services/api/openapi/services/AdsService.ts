/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdContentDto } from '../models/AdContentDto';
import type { CreateAdContentDto } from '../models/CreateAdContentDto';
import type { CreatePostAdDto } from '../models/CreatePostAdDto';
import type { PostAdDto } from '../models/PostAdDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class AdsService {

    /**
     * @param requestBody 
     * @returns AdContentDto 
     * @throws ApiError
     */
    public static adsControllerCreate(
requestBody: CreateAdContentDto,
): CancelablePromise<AdContentDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/ads',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @returns AdContentDto 
     * @throws ApiError
     */
    public static adsControllerFindAll(): CancelablePromise<Array<AdContentDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/ads',
        });
    }

    /**
     * @param id 
     * @returns any 
     * @throws ApiError
     */
    public static adsControllerUpdate(
id: string,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/ads/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @param requestBody 
     * @returns PostAdDto 
     * @throws ApiError
     */
    public static postAdsControllerCreate(
requestBody: CreatePostAdDto,
): CancelablePromise<PostAdDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/ads/post-types',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @returns PostAdDto 
     * @throws ApiError
     */
    public static postAdsControllerFindAllPostAds(): CancelablePromise<Array<PostAdDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/ads/post-types/{id}',
        });
    }

    /**
     * @param id 
     * @returns any 
     * @throws ApiError
     */
    public static postAdsControllerUpdate(
id: string,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/ads/post-types/{id}',
            path: {
                'id': id,
            },
        });
    }

}