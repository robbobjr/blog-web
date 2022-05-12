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
    role: UserDto.role;
    github?: string;
};

export namespace UserDto {

    export enum role {
        USER = 'USER',
        ADMIN = 'ADMIN',
    }


}