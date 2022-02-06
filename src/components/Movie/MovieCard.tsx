import {Movie} from "../../redux/movie/types";
import {createSearchParams, useNavigate} from "react-router-dom";

export type MovieCardProps = {
    movie: Movie,

};
const MovieCard = ({movie}: MovieCardProps) => {
    const router = useNavigate();
    const url = movie.thumbnails?.startsWith('http') ? movie.thumbnails : `http://localhost:8080${movie.thumbnails}`;
    const handleMovieNavigation = () => router({
        pathname: `/watch/${movie.title}`,
        search: `?${createSearchParams({
            "id": movie.id as string,
            "code": movie.code as string,
            "createdDate": movie.createdAt as string,
        })}`
    }, {state: {movie: movie}});

    return (<div onClick={handleMovieNavigation}
                 className={"movie-card height-4xl width-3xl border-radius-sm"}
                 style={{backgroundImage: `url(${url})`, backgroundPosition: 'center', backgroundSize: 'cover'}}>
        <div className={"movie-card__thumbnails "}>
            <div className={"text-hidden"}>
                {movie.description}
            </div>
        </div>
    </div>);
};

export default MovieCard;