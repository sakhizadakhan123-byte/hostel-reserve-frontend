function RoomCard({ room, onDelete }) {
  return (
    <div className="room-card">
      <div className="room-card__header">
        <h3>Room {room.room_number}</h3>
        {room.status === "available" && (
          <span className="badge badge--available">Available</span>
        )}
      </div>
      <p><strong>Type:</strong> {room.room_type}</p>
      <p><strong>Floor:</strong> {room.floor}</p>
      <p><strong>Price:</strong> ${room.price} / night</p>
      
      {/* دکمه حذف */}
      <button 
        className="button button--danger" 
        onClick={() => onDelete(room.id)}
      >
        Delete
      </button>
    </div>
  );
}

export default RoomCard;
