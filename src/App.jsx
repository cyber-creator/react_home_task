// import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Single from './pages/Single';
import Catalog from './pages/Catalog';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Catalog />} />
        <Route path="/recipe/:index" element={<Single />} />
      </Routes>
    </Router>
  );
}

export default App;

// const router = createBrowserRouter(
//   createRoutesFromElements(<Route index element={<Catalog />} />)
// )

// const App = () => {
//   return <RouterProvider router={router} />;
// }

// export default App;