import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import Layout from './components/Layout'
import Profil from './pages/Profil'
import Error404 from './pages/Error404'
import Home from './pages/Home';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route 
          index 
          element={<Home />}
        />

        <Route 
          path='/profil/:userId' 
          element={<Profil />}
        />

        <Route 
          path='/reglage' 
          element={<Error404 />}
        />

        <Route 
          path='/communaute' 
          element={<Error404 />}
        />
        
        <Route path="*" element={<Error404 />} />
      </Route>,
    ),
  );

  return (
    <RouterProvider router={router} />
  );
}

export default App;
