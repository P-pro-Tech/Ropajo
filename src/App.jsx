import './App.css';
import GuestId from './Components/GuestId/GuestId';
import NavBar from './Components/NavBar/NavBar';
import Restaurant from './Components/Restaurant/Restaurant';
import Rooms from './Components/Rooms/Rooms';
import Title from './Components/Title/Title';

function App() {
  return (
    <div className="App">
      <NavBar/>

      <GuestId/>
      <Rooms/>
      {/* <Title title='' subTitle='HIGH CLASS LUXURY'/> */}
      <Restaurant/>

    </div>
  );
}

export default App;
