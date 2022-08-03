/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PostAcessDto } from '../models/PostAcessDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class AccessesService {

    /**
     * @param slug 
     * @returns PostAcessDto 
     * @throws ApiError
     */
    public static postsControllerFindAllPostAccess(
slug: string,
): CancelablePromise<Array<PostAcessDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/posts/{slug}/accesses',
            path: {
                'slug': slug,
            },
        });
    }

}