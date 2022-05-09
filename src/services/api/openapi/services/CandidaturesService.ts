/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreatePostCandidatureDto } from '../models/CreatePostCandidatureDto';
import type { PostCandidatureDto } from '../models/PostCandidatureDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class CandidaturesService {

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

}