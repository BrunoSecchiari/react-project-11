import {
  json,
  useRouteLoaderData /* , useLoaderData, useParams */,
} from 'react-router-dom';
import EventItem from '../components/EventItem';

const EventDetailPage = () => {
  /* const params = useParams(); */
  const data = useRouteLoaderData('event-detail');

  return (
    <>
      {/* <h1>Event {params.id.substring(1)}</h1> */}
      <EventItem event={data.event} />
    </>
  );
};

export default EventDetailPage;

export const eventDetailLoader = async ({ request, params }) => {
  const response = await fetch(`http://localhost:8080/events/${params.id}`);

  if (!response.ok) {
    throw json({ message: 'HTTP 500' }, { status: 500 });
  } else {
    return response;
  }
};
