/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdDto } from '../models/AdDto';
import type { CreateAdDto } from '../models/CreateAdDto';
import type { UpdateAdDto } from '../models/UpdateAdDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class AdsService {

    /**
     * @param requestBody 
     * @returns AdDto 
     * @throws ApiError
     */
    public static adsControllerCreate(
requestBody: CreateAdDto,
): CancelablePromise<AdDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/ads',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param id 
     * @param createdAt 
     * @param updatedAt 
     * @param title 
     * @param description 
     * @param image 
     * @param link 
     * @param type 
     * @returns AdDto 
     * @throws ApiError
     */
    public static adsControllerFindAll(
id?: number,
createdAt?: string,
updatedAt?: string,
title?: string,
description?: string,
image?: string,
link?: string,
type?: 'POST' | 'COMMENT' | 'ASIDE',
): CancelablePromise<Array<AdDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/ads',
            query: {
                'id': id,
                'createdAt': createdAt,
                'updatedAt': updatedAt,
                'title': title,
                'description': description,
                'image': image,
                'link': link,
                'type': type,
            },
        });
    }

    /**
     * @param id 
     * @returns AdDto 
     * @throws ApiError
     */
    public static adsControllerFindOne(
id: string,
): CancelablePromise<AdDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/ads/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @param id 
     * @param requestBody 
     * @returns AdDto 
     * @throws ApiError
     */
    public static adsControllerUpdate(
id: string,
requestBody: UpdateAdDto,
): CancelablePromise<AdDto> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/ads/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}