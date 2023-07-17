import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import Layout from './components/Layout'
import Profil from './pages/Profil'
import Error404 from './pages/Error404'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Profil />} />
        <Route path="*" element={<Error404 />} />
      </Route>,
    ),
  );

  return (
    <RouterProvider router={router} />
  );
}

export default App;
