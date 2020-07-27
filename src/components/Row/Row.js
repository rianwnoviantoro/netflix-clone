import React, { useState, useEffect } from 'react'
import axios from '../../axios'
import './Row.css'

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl }) {
   const [movies, setMovies] = useState([]);

   // Kode snippet dimana akan berjalan berdasarkan kondisi tertentu (requestUrl)
   useEffect(() => {
      // Jika [], jalankan / tampilkan row 1 kali
      async function fetchData() {
         const request = await axios.get(fetchUrl); // fetch data berdasarkan url dari App.js
         // console.log(request.data.results);
         setMovies(request.data.results);
         return request;
      }
      fetchData();
   }, [fetchUrl]);

   // console.log(movies);

   return (
      <div className="row">
         {/* TItle */}
         <h2>{title}</h2>
         <div className="row__posters">
            {/* beberapa row_poster */}

            {movies.map(movie => (
               <img
                  key={movie.id}
                  className="row__poster"
                  src={`${base_url}${movie.poster_path}`} alt={movie.name} />
            ))}
         </div>
         {/* container -> posters */}

      </div>
   )
}

export default Row
