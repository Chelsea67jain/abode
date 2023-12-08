
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import VendorSplashScreen from "./Components/Administrator/Vendors/VendorSplashScreen"
import VendorPropertiesSplashScreen from "./Components/Administrator/Vendors/VendorPropertiesSplashScreen"
import VendorSubPropertiesSplashScreen from "./Components/Administrator/Vendors/VendorSubPropertiesSplashScreen"
import ThirdPage from "./Components/Administrator/Vendors/ThirdPage";
import VendorAddress from "./Components/Administrator/Vendors/VendorAddress";
import Guest from "./Components/Administrator/Vendors/Guest";
import VendorAmenities from "./Components/Administrator/Vendors/VendorAmenities"
import UploadVendorPictures from "./Components/Administrator/Vendors/UploadVendorPictures"
import LastPage from "./Components/Administrator/Vendors/LastPage"
import AdminLogin from './Components/Administrator/Login/AdminLogin';
import Dashboard from './Components/Administrator/Login/Dashboard';
import Home from './Components/UserInterface/Home';
import SecondPage from "./Components/UserInterface/SecondPage"
import ShowProperties from './Components/UserInterface/ShowProperties';
import Booking from './Components/UserInterface/Booking';
import PaymentGateway from './Components/UserInterface/PaymentGateway';

function App(props) {
  return (
    <div >
      <Router>
        <Routes>

          <Route element={<VendorSplashScreen />} path='/vendorsplashscreen' ></Route>
          <Route element={<VendorPropertiesSplashScreen />} path='/vendorproperties' ></Route>
          <Route element={<VendorSubPropertiesSplashScreen />} path='/vendorsubproperties'></Route>
          <Route element={<ThirdPage />} path='/thirdpage'></Route>
          <Route element={<VendorAddress />} path='/vendorAddress'></Route>
          <Route element={<Guest />} path='/guest'></Route>
          <Route element={<VendorAmenities />} path='/vendoramenities'></Route>
          <Route element={<UploadVendorPictures />} path='/uploadvendorpictures'></Route>

          <Route element={<LastPage />} path='/lastpage'></Route>
          <Route element={<AdminLogin />} path='/adminlogin'></Route>
          <Route element={<Dashboard />} path='/dashboard/*'></Route>
          <Route element={<Home />} path='/home'></Route>
          <Route element={<SecondPage />} path='/secondpage'></Route>
          <Route element={<ShowProperties />} path='/showproperties'></Route>
          
          <Route element={<Booking />} path='/booking/:id'></Route>
          <Route element={<PaymentGateway />} path='/paymentgateway'></Route>
          
        </Routes>
      </Router>

    </div>
  );
}

export default App;
