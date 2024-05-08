import UseFetchMovies from './Hooks/useFetchMovies'
import { Fragment } from 'react';
import { Title, MovieGrid, MovieCard, MovieImage, MovieTitle, MovieDate, LoadingSpinner, LoadingText, LoadingContainer } from "./MovieStyled"

const MoviesList = () => {

    const {movies, isLoading, error} = UseFetchMovies();

    const renderMovies = () => (
        
        <MovieGrid>
            {movies.map((movie)=> {
                const {title, id, poster_path, release_date} = movie;

                return (
                    <MovieCard key={id}>
                        <MovieImage alt={`${title} Movie Poster`} src={`https://image.tmdb.org/t/p/original${poster_path}`}  width="200" />
                        <MovieTitle>{title}</MovieTitle>
                        <MovieDate>Release Date: {release_date}</MovieDate>
                    </MovieCard>
                );
            })}
        </MovieGrid>
    )

    const renderContent = () => {
        if(isLoading) return <Loading />;
        if(error) return <p>Error al cargar las peliculas</p>;
        return renderMovies();
    }

    const Loading = () => {
        <LoadingContainer>
            <LoadingSpinner>
                <LoadingText> Cargando </LoadingText>
            </LoadingSpinner>
        </LoadingContainer>
        
    }

    return(
        <Fragment>
            <Title>Peliculas</Title>
            {renderContent()}
        </Fragment>
    );
};

export default MoviesList;