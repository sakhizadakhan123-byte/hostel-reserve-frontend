import RoomCard from './RoomCard';

function RoomList({ rooms }) {
  if (rooms.length === 0) {
    return <p className="empty">No rooms available.</p>;
  }

  return (
    <div className="room-list">
      {rooms.map(room => (
        <RoomCard key={room.id} room={room} />
      ))}
    </div>
  );
}

export default RoomList;
