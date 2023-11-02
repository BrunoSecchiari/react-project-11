import { useParams } from 'react-router-dom';

const EventDetailPage = () => {
  const params = useParams();

  return (
    <>
      <h1>Event {params.id.substring(1)}</h1>
    </>
  );
};

export default EventDetailPage;
