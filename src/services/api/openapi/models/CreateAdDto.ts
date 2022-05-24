/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CreateAdDto = {
    title: string;
    description?: string;
    image?: string;
    link: string;
    type?: CreateAdDto.type;
    postId?: number;
    campaignTime?: number;
    frequency?: number;
};

export namespace CreateAdDto {

    export enum type {
        POST = 'POST',
        COMMENT = 'COMMENT',
        ASIDE = 'ASIDE',
    }


}