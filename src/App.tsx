import React, {useEffect, useState} from 'react';
import Container from "./components/layouts/Container";
import SideBar from "./components/Navs/SideBar";
import NavBar from "./components/Navs/NavBar";
import axios from "axios";
import {Movie, Page} from "./domain/Movie";

function App() {
    const [movies, setMovies] = useState<Page<Movie>>({content: []});
    const getMovies = async () => {
        try {
            const {data: movies} = await axios.get<Page<Movie>>("http://localhost:8080/movies?sort=code&sort=ASC");
            setMovies(prevState => movies);
        } catch (e) {
            console.log(e)
        }
    }
    useEffect(() => {
        getMovies();
        return () => setMovies(() => ({content: []}));
    }, []);


    return (
        <Container className={"container__flex__row"}>
            <SideBar/>
            <div className={"container__flex_column width-full" } style={{overflow:'hidden'}}>
                <NavBar/>
                <div className={"width-full"} style={{display:'flex' , flexDirection:'row' , overflow:'auto' , gap:'1rem'}}>
                    {movies.content?.map(value => <div className={"text-md" } style={{ flexBasis: "300px !important" ,background:'red'}}>{value.title}</div>)}
                </div>
            </div>

        </Container>
    );
}

export default App;
