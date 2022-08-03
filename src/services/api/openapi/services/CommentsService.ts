/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CommentDto } from '../models/CommentDto';
import type { CreateCommentDto } from '../models/CreateCommentDto';
import type { UpdateCommentDto } from '../models/UpdateCommentDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class CommentsService {

    /**
     * @param postId 
     * @returns any 
     * @throws ApiError
     */
    public static postCommentsControllerFindAll(
postId: string,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/posts/comments',
            query: {
                'postId': postId,
            },
        });
    }

    /**
     * @param requestBody 
     * @returns CommentDto 
     * @throws ApiError
     */
    public static postCommentsControllerCreate(
requestBody: CreateCommentDto,
): CancelablePromise<CommentDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/posts/comments',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param id 
     * @returns CommentDto 
     * @throws ApiError
     */
    public static postCommentsControllerDelete(
id: string,
): CancelablePromise<CommentDto> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/posts/comments/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @param id 
     * @param requestBody 
     * @returns CommentDto 
     * @throws ApiError
     */
    public static postCommentsControllerUpdate(
id: string,
requestBody: UpdateCommentDto,
): CancelablePromise<CommentDto> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/posts/comments/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}