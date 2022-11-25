
import './App.css';
import { Route, Routes} from "react-router-dom";
import Home  from './Components/home';
import { Sell } from './Components/sell';
import { Buy } from './Components/buy';
import Aboutus from './Components/aboutus';
import ResponsiveAppBar from './Components/navbar';
import Error from './Components/error';
function App() {
  // const location = useLocation();
  return (
    <>
      <ResponsiveAppBar />
    
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Buy" element={<Buy />} />
        <Route path="/Sell" element={<Sell />} />
        <Route path="/AboutUs" element={<Aboutus />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
