/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CommentRateDto } from './CommentRateDto';
import type { UserDto } from './UserDto';

export type CommentDto = {
    id: number;
    createdAt: string;
    updatedAt: string;
    userId: number;
    postId: number;
    content: string;
    user: UserDto;
    rates: Array<CommentRateDto>;
};