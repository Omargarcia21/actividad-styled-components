import axios from 'axios';
import { useState, useEffect } from 'react';



const useFetchMovies = () => {
    const [moviesState, setMoviesState] = useState({movies: [], isLoading: true, error: null });

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=d700f84a51f037e35be6168fa6bb7604`);
                setMoviesState({movies: response.data.results, isLoading: false, error: null});
            }catch(error) {
                setMoviesState({movies: [], isLoading: false, error: error.message});
            }
        };
        fetchMovies();
    },[]);
    return moviesState;
};

export default useFetchMovies;