/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UpdateAdDto = {
    title?: string;
    description?: string;
    image?: string;
    link?: string;
    type?: UpdateAdDto.type;
    postId?: number;
    campaignTime?: number;
    frequency?: number;
};

export namespace UpdateAdDto {

    export enum type {
        POST = 'POST',
        COMMENT = 'COMMENT',
        ASIDE = 'ASIDE',
    }


}