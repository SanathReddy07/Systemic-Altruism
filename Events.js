import React, { useState } from "react";

const Events = () => {
  const [events, setEvents] = useState([
    { id: 1, title: "Community Prayer", date: "2025-03-15", category: "Religious" },
    { id: 2, title: "Charity Drive", date: "2025-03-20", category: "Charity" }
  ]);

  const [filter, setFilter] = useState("All");
  const [newEvent, setNewEvent] = useState({ title: "", date: "", category: "" });

  const filteredEvents = filter === "All" ? events : events.filter(event => event.category === filter);

  const handleAddEvent = () => {
    if (newEvent.title && newEvent.date && newEvent.category) {
      setEvents([...events, { id: events.length + 1, ...newEvent }]);
      setNewEvent({ title: "", date: "", category: "" });
    }
  };

  return (
    <div className="p-10">
      <h2 className="text-2xl font-bold">Event Listing</h2>
      <div className="mt-4">
        <label>Filter by Category:</label>
        <select className="ml-2 p-2 border" value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="All">All</option>
          <option value="Religious">Religious</option>
          <option value="Charity">Charity</option>
          <option value="Social">Social</option>
        </select>
      </div>
      <ul className="mt-4">
        {filteredEvents.map(event => (
          <li key={event.id} className="border p-3 mt-2">{event.title} - {event.date} ({event.category})</li>
        ))}
      </ul>
      <div className="mt-6">
        <h3 className="text-xl font-bold">Add New Event</h3>
        <input type="text" placeholder="Title" className="border p-2 m-2"
          value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} />
        <input type="date" className="border p-2 m-2"
          value={newEvent.date} onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })} />
        <select className="border p-2 m-2"
          value={newEvent.category} onChange={(e) => setNewEvent({ ...newEvent, category: e.target.value })}>
          <option value="">Select Category</option>
          <option value="Religious">Religious</option>
          <option value="Charity">Charity</option>
          <option value="Social">Social</option>
        </select>
        <button onClick={handleAddEvent} className="bg-green-600 text-white px-4 py-2 rounded">Add Event</button>
      </div>
    </div>
  );
};

export default Events;
