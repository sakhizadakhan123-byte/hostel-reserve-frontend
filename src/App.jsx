import PageHeader from './components/PageHeader';
import RoomList from './components/RoomList';
import { rooms } from './data/rooms';
import './App.css';

function App() {
  return (
    <div className="app">
      <PageHeader 
        title="Hotel Rooms" 
        subtitle={`${rooms.length} rooms in the system`} 
      />
      <RoomList rooms={rooms} />
    </div>
  );
}

export default App;
