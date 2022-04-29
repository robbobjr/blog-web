/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CommentDto } from '../models/CommentDto';
import type { CommentRateDto } from '../models/CommentRateDto';
import type { CreateCommentDto } from '../models/CreateCommentDto';
import type { CreateCommentRateDto } from '../models/CreateCommentRateDto';
import type { CreatePostCandidatureDto } from '../models/CreatePostCandidatureDto';
import type { CreatePostDto } from '../models/CreatePostDto';
import type { CreatePostRateDto } from '../models/CreatePostRateDto';
import type { PostCandidatureDto } from '../models/PostCandidatureDto';
import type { PostDto } from '../models/PostDto';
import type { PostRateDto } from '../models/PostRateDto';
import type { PostTagDto } from '../models/PostTagDto';
import type { UpdateCommentDto } from '../models/UpdateCommentDto';
import type { UpdatePostDto } from '../models/UpdatePostDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class PostsService {

    /**
     * @param requestBody 
     * @returns PostDto 
     * @throws ApiError
     */
    public static postsControllerCreate(
requestBody: CreatePostDto,
): CancelablePromise<PostDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/posts',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param tag 
     * @param title 
     * @param userId 
     * @returns PostDto 
     * @throws ApiError
     */
    public static postsControllerFindAll(
tag?: string,
title?: string,
userId?: number,
): CancelablePromise<Array<PostDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/posts',
            query: {
                'tag': tag,
                'title': title,
                'userId': userId,
            },
        });
    }

    /**
     * @param slug 
     * @returns PostDto 
     * @throws ApiError
     */
    public static postsControllerFindOne(
slug: string,
): CancelablePromise<PostDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/posts/bySlug/{slug}',
            path: {
                'slug': slug,
            },
        });
    }

    /**
     * @param id 
     * @param requestBody 
     * @returns PostDto 
     * @throws ApiError
     */
    public static postsControllerUpdate(
id: string,
requestBody: UpdatePostDto,
): CancelablePromise<PostDto> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/posts/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param id 
     * @returns PostDto 
     * @throws ApiError
     */
    public static postsControllerDelete(
id: string,
): CancelablePromise<PostDto> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/posts/{id}',
            path: {
                'id': id,
            },
        });
    }

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
     * @param requestBody 
     * @returns CommentDto 
     * @throws ApiError
     */
    public static postsControllerCreateComment(
requestBody: CreateCommentDto,
): CancelablePromise<CommentDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/posts/comment',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param commentId 
     * @returns CommentDto 
     * @throws ApiError
     */
    public static postsControllerDeleteComment(
commentId: string,
): CancelablePromise<CommentDto> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/posts/comment/{commentId}',
            path: {
                'commentId': commentId,
            },
        });
    }

    /**
     * @param commentId 
     * @param requestBody 
     * @returns CommentDto 
     * @throws ApiError
     */
    public static postsControllerUpdateComment(
commentId: string,
requestBody: UpdateCommentDto,
): CancelablePromise<CommentDto> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/posts/comment/{commentId}',
            path: {
                'commentId': commentId,
            },
            body: requestBody,
            mediaType: 'application/json',
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
            url: '/posts/comment/rate',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param requestBody 
     * @returns PostCandidatureDto 
     * @throws ApiError
     */
    public static postsControllerCreatePostCandidature(
requestBody: CreatePostCandidatureDto,
): CancelablePromise<PostCandidatureDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/posts/candidature',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param postCandidatureId 
     * @param requestBody 
     * @returns PostCandidatureDto 
     * @throws ApiError
     */
    public static postsControllerUpdatePostCandidature(
postCandidatureId: string,
requestBody: CreatePostCandidatureDto,
): CancelablePromise<PostCandidatureDto> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/posts/candidature/{postCandidatureId}',
            path: {
                'postCandidatureId': postCandidatureId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

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