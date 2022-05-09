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
    public static postsControllerCreatePostRate(
requestBody: CreatePostRateDto,
): CancelablePromise<PostRateDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/posts/rate',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param postId 
     * @returns PostRateDto 
     * @throws ApiError
     */
    public static postsControllerFindAllPostRate(
postId: string,
): CancelablePromise<Array<PostRateDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/posts/rate',
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
    public static postsControllerCreateCommentRate(
requestBody: CreateCommentRateDto,
): CancelablePromise<CommentRateDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/posts/comments/rate',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param commentId 
     * @returns CommentRateDto 
     * @throws ApiError
     */
    public static postsControllerFindAllCommentRate(
commentId: string,
): CancelablePromise<Array<CommentRateDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/posts/comments/rate',
            query: {
                'commentId': commentId,
            },
        });
    }

}