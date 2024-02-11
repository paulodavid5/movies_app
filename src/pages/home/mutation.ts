export const rateMovie = async (movieId:number, rating: number) => {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/rating?guest_session_id=${localStorage.getItem("guest_session_id")}&api_key=${import.meta.env.VITE_API_KEY}`, 
    {
        method: "POST",
        headers: {
            accept: "application/json",
            "Content-Type": "application/json;charset=utf-8",
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZTE0OGU4Yzk3MjNhMzEzM2EzMDUyMDVmZWYyOTcyNCIsInN1YiI6IjYyYWM5ZmJhN2E0ZWU3MDBlZjFjMzgyYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tmum4XrwMncps5HZoNcqSWfYr_5FyStVVIqxpT1W4p4'
        },
        body: `{"value": ${rating}}`
    });

    return res.json()
}
export const rateTvShow = async (tvshowId:number, rating: number) => {
    const res = await fetch(`https://api.themoviedb.org/3/tv/${tvshowId}/rating?guest_session_id=${localStorage.getItem("guest_session_id")}&api_key=${import.meta.env.VITE_API_KEY}`, 
    {
        method: "POST",
        headers: {
            accept: "application/json",
            "Content-Type": "application/json;charset=utf-8",
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZTE0OGU4Yzk3MjNhMzEzM2EzMDUyMDVmZWYyOTcyNCIsInN1YiI6IjYyYWM5ZmJhN2E0ZWU3MDBlZjFjMzgyYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tmum4XrwMncps5HZoNcqSWfYr_5FyStVVIqxpT1W4p4'
        },
        body: `{"value": ${rating}}`
    });

    return res.json()
}