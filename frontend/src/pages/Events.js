import { useEffect, useState } from 'react';
import EventsList from '../components/EventsList';

const EventsPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [events, setEvents] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    const fetchEvents = async () => {
      setIsLoading(true);
      const response = await fetch('http://localhost:8080/events');

      if (!response.ok) {
        setError('Something went wrong');
      } else {
        const data = await response.json();
        setEvents(data.events);
      }
      setIsLoading(false);
    };

    fetchEvents();
  }, []);

  return (
    <>
      <div style={{ textAlign: 'center' }}>
        {isLoading && <p>Loading...</p>}
        {error && <p>{error}</p>}
      </div>
      {!isLoading && events && <EventsList events={events} />}
    </>
  );
};

export default EventsPage;
