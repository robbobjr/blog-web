/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CreateAdDto = {
    title: string;
    description: string;
    image: string;
    link: string;
    type: CreateAdDto.type;
    isAvailable: any;
};

export namespace CreateAdDto {

    export enum type {
        POST = 'POST',
        COMMENT = 'COMMENT',
        ASIDE = 'ASIDE',
    }


}