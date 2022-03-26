/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type PostCandidatureDto = {
    id: number;
    createdAt: string;
    updatedAt: string;
    userId: number;
    postId: number;
    state: PostCandidatureDto.state;
};

export namespace PostCandidatureDto {

    export enum state {
        ACCEPTED = 'ACCEPTED',
        DENIED = 'DENIED',
        WAITING = 'WAITING',
    }


}