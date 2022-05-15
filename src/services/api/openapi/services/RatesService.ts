/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CommentRateDto } from '../models/CommentRateDto';
import type { CreateCommentRateDto } from '../models/CreateCommentRateDto';
import type { CreatePostRateDto } from '../models/CreatePostRateDto';
import type { PostRateDto } from '../models/PostRateDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class RatesService {

    /**
     * @param requestBody 
     * @returns PostRateDto 
     * @throws ApiError
     */
    public static postRatesControllerCreate(
requestBody: CreatePostRateDto,
): CancelablePromise<PostRateDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/posts/rates/rate',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param postId 
     * @returns PostRateDto 
     * @throws ApiError
     */
    public static postRatesControllerFindAll(
postId: string,
): CancelablePromise<Array<PostRateDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/posts/rates/rate',
            query: {
                'postId': postId,
            },
        });
    }

    /**
     * @param requestBody 
     * @returns CommentRateDto 
     * @throws ApiError
     */
    public static postRatesControllerCreateCommentRate(
requestBody: CreateCommentRateDto,
): CancelablePromise<CommentRateDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/posts/rates/comments/rate',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param commentId 
     * @returns CommentRateDto 
     * @throws ApiError
     */
    public static postRatesControllerFindAllCommentRate(
commentId: string,
): CancelablePromise<Array<CommentRateDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/posts/rates/comments/rate',
            query: {
                'commentId': commentId,
            },
        });
    }

}