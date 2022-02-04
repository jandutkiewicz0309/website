 import React, { useEffect, useState } from "react";

// export const Header = () => {
//     return (
//         <section>
//         <div className="Header-input">
//             <h1>Popularne Filmy</h1>
//             <input 
//             type="string" 
//             placeholder="Wpisz tekst"
//             />
//         </div>
//         </section> 
//     )
// }

// export const Header = () => {

// }

export const Header = () => {
    const api = "https://api.themoviedb.org/3/movie/"
    const apiKey = "f9703a7ee70964e90f3018fd46f511c8"
    const [movies, setMovies] = useState([])
    const fetchMovies = async () =>{
        const response = await fetch("https://api.themoviedb.org/3/movie/550?api_key=f9703a7ee70964e90f3018fd46f511c8")
        const results = await response.json()
        setMovies(results)
      }
useEffect (() => {
    fetchMovies()
})
console.log(movies)

    return (
        <div>
            <ul>
                {movies.map(movie => (
                    <li key={movie.id}> 
                        {movie.overview}
                    </li>
                ))}
                
            </ul> 
        </div>
    );
}
 

export default Header;
