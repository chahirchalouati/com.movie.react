export interface Person {
    firstName: string,
    lastName: string,
    userName: string,

}

export interface Actor extends Person {
    id?: string,

}

export interface Like {
    id: string,

}

export interface Comment {
    id: string,


}

export interface CreateMovieRequest {
    title: string;
    description?: string;
    thumbnails?: File;
    file?: File;
    actors?: Actor[];
    likes?: Like[];
    comments?: Comment[];
}

export interface UpdateMovieRequest {
    title: string;
    description?: string;
    thumbnails?: File;
    file?: File;
    actors?: Actor[];
    likes?: Like[];
    comments?: Comment[];
}