import {Movie} from "../../domain/Movie";

export type MovieCardProps = {
    movie: Movie,

};
const MovieCard = ({movie}: MovieCardProps) => {

    return (<div className={"movie-card"}>
        <div className={"movie-card__thumbnails"}>
            <img className={"height-4xl width-3xl"}
                src={movie.thumbnails?.startsWith('http') ? movie.thumbnails : `http://localhost:8080${movie.thumbnails}`}
                alt={movie.code}/>
        </div>
    </div>);
};

export default MovieCard;