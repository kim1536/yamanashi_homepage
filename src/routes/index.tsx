import {Layout} from '@/Layout';
import About from '@/page/About';
import Home from '@/page/Home';
import {useRoutes} from 'react-router-dom';

interface RouteObject {
  path: string;
  element: React.ReactNode;
  children?: RouteObject[];
}

// ルート設定
const routeConfig: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
    ],
  },
];

export const AppRouter = () => {
  const routes = useRoutes(routeConfig);
  return routes;
};
