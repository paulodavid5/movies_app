import { useParams } from "react-router-dom"
import { Grid, Header, Loader, Segment, Image, List, Label } from "semantic-ui-react"
import { fetchMovieDetails, fetchMovieProvider } from "./query"
import { useQuery } from "@tanstack/react-query"


export const Movie = () => {
    const { id } = useParams<string>()

    if(!id) {
        return <div>Invalid Movie ID</div>
    }

    // Fetch movie details
    const { data: dataMovie, isLoading: isLoadingMovie } = useQuery({
        queryKey: ["movie"],
        queryFn: () => fetchMovieDetails(id)
    })

    // Fetch movie provider
    const { data: dataProvider, isLoading: isLoadingProvider } = useQuery({
        queryKey: ["movieProvider"],
        queryFn: () => fetchMovieProvider(id)
    })

    if(isLoadingMovie || isLoadingProvider ) {
        return <Loader active />
    }

    
    return <div style={{marginTop: 50}}>
        <Segment>
            <Header>{dataMovie.title}</Header>
            <Grid columns={2} divided textAlign="left" style={{marginTop: 20}}>
                <Grid.Row>
                    <Grid.Column width={6}>
                        <div style={{display:"flex", alignItems: "center", justifyContent: "center" , height: "100%"}}>
                            <Image src={`https://image.tmdb.org/t/p/original/${dataMovie.poster_path}`} size="medium" centered />
                        </div>
                    </Grid.Column>
                    <Grid.Column width={10}>
                        <List.Item>
                            <List.Header>Is The Movie For Adults: </List.Header>
                            {dataMovie.adult ? "Yes" : "No"}
                        </List.Item>
                        <List.Item>
                            <List.Header>Budget: </List.Header>
                            {dataMovie.budget}
                        </List.Item>
                        <List.Item>
                            <List.Header>Genres: </List.Header>
                            {dataMovie.genres.map((genre:any) => (
                                <Label key={genre.id}>{genre.name}</Label>
                            ))}
                        </List.Item>
                        <List.Item>
                        <List.Header>Providers: </List.Header>
                        {dataProvider?.results ? (
                        <div>
                            {Object.keys(dataProvider.results).map((country: any) => (
                            <div key={country}>
                                {country.startsWith("PT") && (
                                <div>
                                    {dataProvider.results[country].rent && (
                                    <div>
                                        {dataProvider.results[country].rent.map((provider: any) => (
                                        <Label key={provider.provider_id} style={{background: "#ee302e", color: "#fff"}}>
                                            {/* Display provider information here */}
                                            <p>{provider.provider_name}</p>
                                        </Label>
                                        ))}
                                    </div>
                                    )}
                                </div>
                                )}
                            </div>
                            ))}
                        </div>
                        ): (<p>No provider in portugal.</p>)}


                        </List.Item>
                        <List.Item>
                            <List.Header>IMDB ID: </List.Header>
                            {dataMovie.imdb_id}
                        </List.Item>
                        <List.Item>
                            <List.Header>Popularity: </List.Header>
                            {dataMovie.popularity}
                        </List.Item>
                        <List.Item>
                            <List.Header>Production Companies: </List.Header>
                            {dataMovie.production_companies.map((company:any) => company.name).join(", ")
                            }
                        </List.Item>
                        <List.Item>
                            <List.Header>Release Date: </List.Header>
                            {dataMovie.release_date}
                        </List.Item>
                        <List.Item>
                            <List.Header>Revenue: </List.Header>
                            {dataMovie.revenue}
                        </List.Item>
                        <List.Item>
                            <List.Header>Vote Average: </List.Header>
                            {dataMovie.vote_average}
                        </List.Item>
                        <List.Item>
                            <List.Header>Language: </List.Header>
                            {dataMovie.original_language}
                        </List.Item>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
    </div>
}