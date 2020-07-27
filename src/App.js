import React from 'react'
import './App.css'
import Row from './components/Row/Row'
import requests from './request'

function App() {
   return (
      <div className="App">
         <h1>Test</h1>
         <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} />
         <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      </div>
   )
}

export default App
