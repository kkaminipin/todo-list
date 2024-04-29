import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Wrap from '../layouts/Wrap';
import Main from '../pages/Main';
import Todo from '../pages/Todo';
import About from '../pages/About';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Wrap />,
    children: [
      {
        index: true,
        path: '/',
        element: <Main />,
      },
      {
        path: '/todo',
        element: <Todo />,
      },
      {
        path: '/about',
        element: <About />,
      },
    ],
  },
]);

const Routers = () => {
  return <RouterProvider router={router} />;
};

export default Routers;
