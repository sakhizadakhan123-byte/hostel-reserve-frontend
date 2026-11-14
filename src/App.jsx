import { useState } from 'react';
import PageHeader from './components/PageHeader';
import RoomList from './components/RoomList';
import PageFooter from './components/PageFooter';
import AddRoomForm from './components/AddRoomForm';
import { rooms as initialRooms } from './data/rooms';
import './App.css';

function App() {
  // تعریف Stateها
  const [rooms, setRooms] = useState(initialRooms);
  const [query, setQuery] = useState('');
  const [sort, setSort] = useState('room_number');
  const [availableOnly, setAvailableOnly] = useState(false);

  // تابع اضافه کردن اتاق
  function handleAdd(newRoom) {
    const newId = Math.max(0, ...rooms.map(r => r.id)) + 1;
    setRooms([{ id: newId, ...newRoom }, ...rooms]);
  }

  // تابع حذف اتاق
  function handleDelete(id) {
    if (!window.confirm('Delete this room?')) return;
    setRooms(rooms.filter(room => room.id !== id));
  }

  // تابع پاک کردن فیلترها
  function clearFilters() {
    setQuery('');
    setSort('room_number');
    setAvailableOnly(false);
  }

  // منطق فیلتر کردن و مرتب‌سازی
  let visibleRooms = rooms.filter(room =>
    room.room_number.toLowerCase().includes(query.toLowerCase())
  );

  if (availableOnly) {
    visibleRooms = visibleRooms.filter(room => room.status === 'available');
  }

  visibleRooms.sort((a, b) => {
    if (sort === 'price') return a.price - b.price;
    if (sort === 'floor') return a.floor - b.floor;
    return a.room_number.localeCompare(b.room_number);
  });

  return (
    <div className="app">
      <PageHeader
        title="Hotel Rooms"
        subtitle={`${visibleRooms.length} of ${rooms.length} rooms shown`}
      />

      <AddRoomForm onAdd={handleAdd} />

      <div className="controls">
        <input
          className="search-input"
          type="text"
          placeholder="Search by room number..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <select className="sort-select" value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="room_number">Sort: Room Number</option>
          <option value="price">Sort: Price</option>
          <option value="floor">Sort: Floor</option>
        </select>

        <label className="checkbox-label">
          <input
            type="checkbox"
            checked={availableOnly}
            onChange={(e) => setAvailableOnly(e.target.checked)}
          />
          Show available only
        </label>

        {/* این همان تکه کدی است که در عکس فرستادید، اما حالا در جای درست قرار گرفته است */}
        {(query || availableOnly || sort !== 'room_number') && (
          <button onClick={clearFilters} className="button button--link">
            Clear filters
          </button>
        )}
      </div>

      <RoomList rooms={visibleRooms} onDelete={handleDelete} />
      
      <PageFooter />
    </div>
  );
}

export default App;
