/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UserDto = {
    id: number;
    createdAt: string;
    updatedAt: string;
    name: string;
    image?: string;
    email: string;
    permission: UserDto.permission;
    github?: string;
};

export namespace UserDto {

    export enum permission {
        USER = 'USER',
        ADMIN = 'ADMIN',
    }


}