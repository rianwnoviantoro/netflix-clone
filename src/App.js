import React from 'react'
import './App.css'
import requests from './requests'

import Row from './components/Row/Row'
import Banner from './components/Banner/Banner'

function App() {
   return (
      <div className="app">
         {/* Nav */}
         {/* Banner */}
         <Banner />
         <Row
            title="NETFLIX ORIGINALS"
            fetchUrl={requests.fetchNetflixOriginals}
            isLargeRow
         />
         <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
         <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
         <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
         <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
         <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
         <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
         <Row title="Documentaries Movies" fetchUrl={requests.fetchDocumentaries} />
      </div>
   )
}

export default App
