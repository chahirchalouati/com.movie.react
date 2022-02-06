import {Page} from "../../domain/Movie";


export enum MovieActionTypes {
    CREATE = "@@movie/CREATE",
    DELETE = "@@movie/DELETE",
    UPDATE = "@@movie/UPDATE",
    START = "@@movie/START",
    COMPLETE = "@@movie/COMPLETE",
    ERROR = "@@movie/ERROR",

}

export interface Movie {
    id?: string;
    title?: string;
    description?: string;
    code?: string;
    thumbnails?: string;
    downloadUrl?: string;
    actors?: any[];
    likes?: any[];
    comments?: any[];
    createdAt?: String;
}

export interface MovieState {
    readonly loading: boolean;
    readonly page: Page<Movie> | null;
    readonly errors?: string;
}