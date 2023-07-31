/* eslint-disable react/react-in-jsx-scope */
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import Layout from './components/Layout';
import Profil from './pages/Profil';
import Error404 from './pages/Error404';
import Home from './pages/Home';
import profilRequest from './utils/profilRequest';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={<Home />}
        />

        <Route
          path="/profil/:userId"
          element={<Profil />}
          loader={({ params }) => profilRequest(params.userId)}
          errorElement={<Error404 />}
        />

        <Route
          path="/reglage"
          element={<Error404 />}
        />

        <Route
          path="/communaute"
          element={<Error404 />}
        />

        <Route path="/*" element={<Error404 />} />
      </Route>,
    ),
  );

  return (
    <RouterProvider router={router} />
  );
}

export default App;
