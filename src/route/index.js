import React from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
  useParams,
  Navigate,
} from 'react-router-dom';
import Detail from '../pages/Detail';
import Home from '../pages/Home';

function Index() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route key={1} exact={true} path={'/'} element={<Home />} />
          <Route key={2} exact={true} path={'/:id'} element={<Detail />} />

         

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Index;