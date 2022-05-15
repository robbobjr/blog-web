/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export { ApiError } from './core/ApiError';
export { CancelablePromise, CancelError } from './core/CancelablePromise';
export { OpenAPI } from './core/OpenAPI';
export type { OpenAPIConfig } from './core/OpenAPI';

export { AdDto } from './models/AdDto';
export type { CommentDto } from './models/CommentDto';
export type { CommentRateDto } from './models/CommentRateDto';
export { CreateAdDto } from './models/CreateAdDto';
export type { CreateCommentDto } from './models/CreateCommentDto';
export type { CreateCommentRateDto } from './models/CreateCommentRateDto';
export type { CreatePostDto } from './models/CreatePostDto';
export type { CreatePostRateDto } from './models/CreatePostRateDto';
export type { CreateUserDto } from './models/CreateUserDto';
export type { PostAcessDto } from './models/PostAcessDto';
export { PostCandidatureDto } from './models/PostCandidatureDto';
export type { PostDto } from './models/PostDto';
export type { PostRateDto } from './models/PostRateDto';
export type { PostTagDto } from './models/PostTagDto';
export { UpdateAdDto } from './models/UpdateAdDto';
export type { UpdateCommentDto } from './models/UpdateCommentDto';
export type { UpdatePostDto } from './models/UpdatePostDto';
export type { UpdateUserDto } from './models/UpdateUserDto';
export { UserDto } from './models/UserDto';

export { AdsService } from './services/AdsService';
export { CommentsService } from './services/CommentsService';
export { DefaultService } from './services/DefaultService';
export { MetricsService } from './services/MetricsService';
export { PostsService } from './services/PostsService';
export { RatesService } from './services/RatesService';
export { TagsService } from './services/TagsService';
export { UsersService } from './services/UsersService';
