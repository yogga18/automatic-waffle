import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import Beranda from '../pages/Beranda';
import NotFound from '../pages/NotFound';
import CreateUser from '../pages/Users/CreateUser';
import Users from '../pages/Users';
import UserDetail from '../pages/Users/UserDetail';
import SegmentasiUsers from '../pages/Users/SegmentasiUsers';
import Login from '../pages/Auth/Login';
import Register from '../pages/Auth/Register';
import SuratIjin from '../pages/SuratIjin';
import SegmentasiSuratJalan from '../pages/SuratIjin/SegmentasiSuratIjin';

const RoutesIndex = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/beranda' element={<Beranda />} />
        <Route path='/users' element={<Users />} />
        <Route path='/create-user' element={<CreateUser />} />
        <Route path='/update-user/:id' element={<CreateUser />} />
        <Route path='/user-detail/:id' element={<UserDetail />} />
        <Route path='/users-count' element={<SegmentasiUsers />} />
        <Route path='/users-male' element={<SegmentasiUsers />} />
        <Route path='/users-female' element={<SegmentasiUsers />} />
        <Route path='/users-active' element={<SegmentasiUsers />} />
        <Route path='/users-ijin-belajar' element={<SegmentasiUsers />} />
        <Route path='/surat-count' element={<SegmentasiSuratJalan />} />
        <Route path='/surat-jalan' element={<SegmentasiSuratJalan />} />
        <Route path='/surat-cuti' element={<SegmentasiSuratJalan />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/surat-ijin' element={<SuratIjin />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default RoutesIndex;
