import './App.css';
import GuestId from './Components/GuestId/GuestId';
import NavBar from './Components/NavBar/NavBar';
import Restaurant from './Components/Restaurant/Restaurant';
import Pool from './Components/Pool/Pool';
import Rooms from './Components/Rooms/Rooms';
import Gallery from './Components/Gallery/Gallery';
import Contact from './Components/Contact/Contact';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <GuestId/>
      <Rooms/>
      <Pool/>
      <Restaurant/>
      <Gallery/>
      <Contact/>
    </div>
  );
}

export default App;
