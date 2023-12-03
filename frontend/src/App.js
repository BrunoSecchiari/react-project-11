import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import RootLayout from './pages/RootLayout';
import HomePage from './pages/Home';
import ErrorPage from './pages/Error';

import EventLayout from './pages/EventLayout';
import EventsPage, { eventsLoader } from './pages/Events';
import EventDetailPage, {
  deleteEventAction,
  eventDetailLoader,
} from './pages/EventDetail';
import NewEventPage from './pages/NewEvent';
import EditEventPage from './pages/EditEvent';
import NewsletterPage, { newsletterAction } from './pages/Newsletter';

import { eventAction } from './utils/eventAction';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'events',
        element: <EventLayout />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: eventsLoader,
          },
          {
            path: ':id',
            id: 'event-detail',
            loader: eventDetailLoader,
            children: [
              {
                index: true,
                element: <EventDetailPage />,
                action: deleteEventAction,
              },
              { path: 'edit', element: <EditEventPage />, action: eventAction },
            ],
          },
          { path: 'new', element: <NewEventPage />, action: eventAction },
        ],
      },
      {
        path: 'newsletter',
        element: <NewsletterPage />,
        action: newsletterAction,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
