import React from 'react';

import './App.css';
import HomeScreen from './HomeScreen';
import Nav from './Nav';
import requests from './Requests';
import Row from './Row';


function App() {
  return (
    <div className="app">
      <Nav/>
      <HomeScreen/>
      <Row
      title="NETFLIX ORIGINALS"
      fetchUrl={requests.fetchNetflixOriginals}
      islargeRow
      />
      <Row
      title="Trending Now"
      fetchUrl={requests.fetchTrending}


      />
      <Row
      title="Top Rated"
      fetchUrl={requests.fetchTopRated}


      />
      <Row
      title="Action Movies"
      fetchUrl={requests.fetchActionMovies}


      />
      <Row
      title="Comedy Movies"
      fetchUrl={requests.fetchComedyMovies}
  
      />
      <Row
      title="Romance Movies"
      fetchUrl={requests.fetchRomanceMovies}
      />
      <Row
      title="Horror Movies"
      fetchUrl={requests.fetchHorrorMovies}
      />
      <Row
      title="Documentaries"
      fetchUrl={requests.fetchDocumentaries}
      />
    </div>
  );
}

export default App;
