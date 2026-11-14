import { useState } from 'react';

function AddRoomForm({ onAdd }) {
  // ساخت State برای هر فیلد (Controlled Inputs)
  const [roomNumber, setRoomNumber] = useState('');
  const [roomType, setRoomType] = useState('');
  const [floor, setFloor] = useState('');
  const [price, setPrice] = useState('');

  function handleSubmit(e) {
    e.preventDefault(); // جلوگیری از رفرش شدن صفحه (بسیار مهم!)

    // اعتبارسنجی ساده
    if (!roomNumber.trim() || !price) {
      alert('Room number and price are required.');
      return;
    }

    // ارسال داده‌ها به کامپوننت والد (App)
    onAdd({
      room_number: roomNumber.trim(),
      room_type: roomType.trim() || 'Standard',
      floor: Number(floor) || 1,
      price: Number(price),
      status: 'available' // اتاق جدید همیشه موجود است
    });

    // پاک کردن فرم بعد از ثبت
    setRoomNumber('');
    setRoomType('');
    setFloor('');
    setPrice('');
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>Add New Room</h3>
      
      <input 
        type="text" 
        placeholder="Room Number *" 
        value={roomNumber} 
        onChange={(e) => setRoomNumber(e.target.value)} 
      />
      <input 
        type="text" 
        placeholder="Type (e.g. Single, Suite)" 
        value={roomType} 
        onChange={(e) => setRoomType(e.target.value)} 
      />
      <input 
        type="number" 
        placeholder="Floor" 
        value={floor} 
        onChange={(e) => setFloor(e.target.value)} 
      />
      <input 
        type="number" 
        placeholder="Price per night *" 
        value={price} 
        onChange={(e) => setPrice(e.target.value)} 
      />
      
      <button type="submit" className="button button--primary">
        Add Room
      </button>
    </form>
  );
}

export default AddRoomForm;
