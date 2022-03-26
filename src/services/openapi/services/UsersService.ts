/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateUserDto } from '../models/CreateUserDto';
import type { UpdateUserDto } from '../models/UpdateUserDto';
import type { UserDto } from '../models/UserDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class UsersService {

    /**
     * @param requestBody 
     * @returns UserDto 
     * @throws ApiError
     */
    public static usersControllerCreate(
requestBody: CreateUserDto,
): CancelablePromise<UserDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/users',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @returns UserDto 
     * @throws ApiError
     */
    public static usersControllerFindAll(): CancelablePromise<UserDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users',
        });
    }

    /**
     * @param email 
     * @returns UserDto 
     * @throws ApiError
     */
    public static usersControllerFindOne(
email: string,
): CancelablePromise<UserDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users/{email}',
            path: {
                'email': email,
            },
        });
    }

    /**
     * @param id 
     * @param requestBody 
     * @returns UserDto 
     * @throws ApiError
     */
    public static usersControllerUpdate(
id: string,
requestBody: UpdateUserDto,
): CancelablePromise<UserDto> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/users/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}