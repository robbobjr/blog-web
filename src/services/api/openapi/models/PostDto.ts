/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CommentDto } from './CommentDto';
import type { PostCandidatureDto } from './PostCandidatureDto';
import type { PostRateDto } from './PostRateDto';
import type { PostTagDto } from './PostTagDto';
import type { UserDto } from './UserDto';

export type PostDto = {
    id: number;
    createdAt: string;
    updatedAt: string;
    slug: string;
    image?: string;
    link?: string;
    title: string;
    content: string;
    description?: string;
    userId: number;
    user: UserDto;
    comments: Array<CommentDto>;
    rates: Array<PostRateDto>;
    candidatures: Array<PostCandidatureDto>;
    tags: Array<PostTagDto>;
};