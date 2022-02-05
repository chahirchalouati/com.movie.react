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

export interface Pageable {
    number?: string;
    size?: string;
    sort?: string [];
}

export interface Page<T> {
    content: Array<T>
    empty?: boolean,
    first?: boolean,
    last?: boolean,
    number?: number,
    numberOfElements?: number,
    pageable?: {
        sort?: { sorted?: boolean, unsorted?: boolean, empty?: boolean },
        offset?: number,
        pageNumber?: number,
        pageSize?: number
    },
    offset?: number,
    pageNumber?: number,
    pageSize?: number,
    paged?: boolean,
    size?: number,
    sort?: { sorted?: boolean, unsorted?: boolean, empty?: boolean },
    sorted?: boolean,
    unsorted?: boolean,
    totalElements?: number,
    totalPages?: number
}