/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PostTagDto } from '../models/PostTagDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class TagsService {

    /**
     * @returns PostTagDto 
     * @throws ApiError
     */
    public static postsControllerFindAllPostTags(): CancelablePromise<Array<PostTagDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/posts/tags',
        });
    }

}