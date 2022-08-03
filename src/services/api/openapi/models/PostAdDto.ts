/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AdContentDto } from './AdContentDto';

export type PostAdDto = {
    id: number;
    createdAt: string;
    updatedAt: string;
    adContentId: number;
    isAvailable: any;
    postId: number;
    adContent: AdContentDto;
};