import NavBar from "../components/Navs/NavBar";
import MovieList from "../components/Movie/MovieList";
import React from "react";

export type HomeProps = {};
const Home = ({}: HomeProps) => {
    return (<div className={"container__flex_column width-full"} style={{overflow: 'hidden'}}>
        <NavBar/>
        <MovieList/>
    </div>);
};

export default Home;