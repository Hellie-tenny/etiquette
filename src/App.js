import React, {useEffect, useState} from 'react';
import './App.css';
import Header from './components/Header';
import EventSearch from './components/EventSearch';
import Footer from './components/Footer';
import Events from './components/Events';

function App() {

  const [events, setEvents] = useState();

  useEffect(() => {
    fetch('events.json')
    .then(res => res.json())
    .then(data => console.log(data))
    
  }, []);

  return (
    <div className="App">
      <Header />
      <EventSearch  />
      <Events events={events} />
      <Footer />
    </div>
  );
}

export default App;
