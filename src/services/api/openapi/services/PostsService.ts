/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreatePostDto } from '../models/CreatePostDto';
import type { PostDto } from '../models/PostDto';
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
     * @param rateValue 
     * @param input 
     * @returns PostDto 
     * @throws ApiError
     */
    public static postsControllerFindAll(
tag?: string,
title?: string,
userId?: number,
rateValue?: number,
input?: string,
): CancelablePromise<Array<PostDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/posts',
            query: {
                'tag': tag,
                'title': title,
                'userId': userId,
                'rateValue': rateValue,
                'input': input,
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

}