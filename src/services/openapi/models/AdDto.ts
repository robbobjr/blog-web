/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type AdDto = {
    id: number;
    createdAt: string;
    updatedAt: string;
    title: string;
    description: string;
    image: string;
    link: string;
    type: AdDto.type;
    isAvailable: any;
};

export namespace AdDto {

    export enum type {
        POST = 'POST',
        COMMENT = 'COMMENT',
        ASIDE = 'ASIDE',
    }


}