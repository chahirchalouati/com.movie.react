import React, {useEffect, useState} from 'react';
import Container from "./components/layouts/Container";
import SideBar from "./components/Navs/SideBar";
import NavBar from "./components/Navs/NavBar";
import {Movie, Page} from "./domain/Movie";
import MovieList from "./components/Movie/MovieList";
import {httpClient} from "./configs/HttpConfig";
import Banner from "./domain/Banner";
import BannerList from "./components/Movie/BannerList";


function App() {
    const [movies, setMovies] = useState<Page<Movie>>({content: []});
    const [banners, setBanners] = useState<Array<Banner>>([]);
    const getMovies = async () => {
        try {
            const {data: movies} = await httpClient.get<Page<Movie>>("/movies?sort=createdAt,DESC");
            setMovies(() => movies);
            const {data: banners} = await httpClient.get<Array<Banner>>("/banners?limit=10");
            setBanners(() => banners);

        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        getMovies();

    }, []);

    return (
        <Container className={"container__flex__row"}>
            <SideBar/>
            <div className={"container__flex_column width-full"} style={{overflow: 'hidden'}}>
                <NavBar/>
                <BannerList banners={banners}/>
                <MovieList movies={movies.content}/>
            </div>

        </Container>
    );
}

export default App;
