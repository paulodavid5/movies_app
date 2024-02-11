export const fetchMovies = async () => {
    const res = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', 
    {
        headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZTE0OGU4Yzk3MjNhMzEzM2EzMDUyMDVmZWYyOTcyNCIsInN1YiI6IjYyYWM5ZmJhN2E0ZWU3MDBlZjFjMzgyYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tmum4XrwMncps5HZoNcqSWfYr_5FyStVVIqxpT1W4p4"
        },
    });

    return res.json()
}


export const fetchTvShows = async () => {
    const res = await fetch('https://api.themoviedb.org/3/tv/popular?language=en-US&page=1', 
    {
        headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZTE0OGU4Yzk3MjNhMzEzM2EzMDUyMDVmZWYyOTcyNCIsInN1YiI6IjYyYWM5ZmJhN2E0ZWU3MDBlZjFjMzgyYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tmum4XrwMncps5HZoNcqSWfYr_5FyStVVIqxpT1W4p4"
        },
    });

    return res.json()
}