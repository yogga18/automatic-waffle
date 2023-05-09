import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import Beranda from '../pages/Beranda';
import NotFound from '../pages/NotFound';

const RoutesIndex = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/beranda' element={<Beranda />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default RoutesIndex;
