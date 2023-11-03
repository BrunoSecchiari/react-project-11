import { useLoaderData } from 'react-router-dom';
import EventsList from '../components/EventsList';

const EventsPage = () => {
  const data = useLoaderData();

  /* if (data.error) {
    return <p>{data.message}</p>;
  } */

  const events = data.events;
  return <EventsList events={events} />;
};

export default EventsPage;

export const eventsLoader = async () => {
  const response = await fetch('http://localhost:8080/events');

  if (!response.ok) {
    /* return {
      error: true,
      message: 'One or more events could not be fetched properly.',
    }; */
  } else {
    return response;
  }
};
