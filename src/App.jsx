import './App.css';
import Coffee from './Components/Coffee/Coffee';
import GuestId from './Components/GuestId/GuestId';
import NavBar from './Components/NavBar/NavBar';
import Pool from './Components/Pool/Pool';
import Rooms from './Components/Rooms/Rooms';
// import Title from './Components/Title/Title';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <GuestId/>
      <Rooms/>
      <Pool/>
      {/* <Restaurant/> */}

      <Coffee/>

    </div>
  );
}

export default App;
