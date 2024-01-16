import React from 'react';
import './App.css';
import Header from './components/Header';
import EventSearch from './components/EventSearch';
import Footer from './components/Footer';
import Events from './components/Events';

function App() {
  return (
    <div className="App">
      <Header />
      <EventSearch />
      <Events />
      <Footer />
    </div>
  );
}

export default App;
