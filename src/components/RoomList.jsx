import RoomCard from './RoomCard';

function RoomList({ rooms, onDelete }) {
  if (rooms.length === 0) {
    return (
      <div className="empty-state">
        <p>No rooms match your filters.</p>
        <p className="empty-state__hint">Try clearing the search box or unchecking "Show available only".</p>
      </div>
    );
  }

  return (
    <div className="room-list">
      {rooms.map(room => (
        <RoomCard 
          key={room.id} 
          room={room} 
          onDelete={onDelete} 
        />
      ))}
    </div>
  );
}

export default RoomList;
