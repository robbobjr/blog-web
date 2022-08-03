/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CreatePostDto = {
    image?: string;
    link?: string;
    title: string;
    content: string;
    description?: string;
    userId: number;
    tags?: Array<string>;
    slug?: string;
};