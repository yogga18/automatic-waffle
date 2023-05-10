import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import Beranda from '../pages/Beranda';
import NotFound from '../pages/NotFound';
import CreateUser from '../pages/Users/CreateUser';
import UserDetail from '../pages/Users/UserDetail';
// import UpdateUser from '../pages/Users/UpdateUser';

const RoutesIndex = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/beranda' element={<Beranda />} />
        <Route path='/create-user' element={<CreateUser />} />
        <Route path='/update-user/:id' element={<CreateUser />} />
        <Route path='/user-detail/:id' element={<UserDetail />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default RoutesIndex;
