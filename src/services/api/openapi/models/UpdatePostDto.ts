/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UpdatePostDto = {
    image?: string;
    link?: string;
    participation?: number;
    title?: string;
    content?: string;
    description?: string;
    availlablePositions?: number;
    userId?: number;
    tags?: Array<string>;
};