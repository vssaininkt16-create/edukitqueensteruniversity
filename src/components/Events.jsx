// src/components/Events.jsx
import React from 'react';
import Link from 'next/link';
import { eventsData } from '../data/eventsData';
import '../styles/events.css'; // Assuming you'll create this

function Events() {
  const upcomingEvents = eventsData.filter((event, index) => index < 3); // Show top 3 upcoming events

  return (
    <section className="section events-section">
      <div className="container">
        <h2 className="section-title">Upcoming Events</h2>
        <div className="events-list">
          {upcomingEvents.map((event) => (
            <div key={event.id} className="event-item">
              <div className="event-date">
                <span className="month">{event.date.split(' ')[0]}</span>
                <span className="day">{event.date.split(' ')[1]}</span>
              </div>
              <div className="event-details">
                <h3>
                  <Link href={event.link}>{event.title}</Link>
                </h3>
                <p className="event-description">{event.description}</p>
                <p className="event-location">
                  <i className="fas fa-map-marker-alt"></i> {event.location}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="events-cta">
          <Link href="/events" className="button button-primary">
            View All Events
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Events;
