import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import RootLayout from './pages/RootLayout';
import HomePage from './pages/Home';

import EventLayout from './pages/EventLayout';
import EventsPage from './pages/Events';
import EventDetailPage from './pages/EventDetail';
import NewEventPage from './pages/NewEvent';
import EditEventPage from './pages/EditEvent';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'events',
        element: <EventLayout />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: async () => {
              const response = await fetch('http://localhost:8080/events');

              if (!response.ok) {
              } else {
                const responseData = await response.json();
                return responseData.events;
              }
            },
          },
          { path: ':id', element: <EventDetailPage /> },
          { path: ':id/edit', element: <EditEventPage /> },
          { path: 'new', element: <NewEventPage /> },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
