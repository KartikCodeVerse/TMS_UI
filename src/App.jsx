import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Administrator from "./Components/Tabs/Administrator";
import Master from "./Components/Tabs/Master";
import Print from "./Components/Tabs/Print";
import Report from "./Components/Tabs/Report";
import Transaction from "./Components/Tabs/Transaction";
import Setting from "./Pages/Setting/Setting";
import UserAccount from "./Pages/UserAccount/UserAccount";
import UserProfile from "./Pages/UserProfile/UserProfile";
import ChangePassword from "./Pages/ChangePassword/ChangePassword";
import SystemInfo from "./Pages/SystemInfo/SystemInfo";
import Quite from "./Pages/Quite/Quite";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home/Home";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/administrator" element={<Administrator />}>
          <Route index element={<Setting />} />
          <Route path="user/account" element={<UserAccount />} />
          <Route path="user/profile" element={<UserProfile />} />
          <Route path="changepassword" element={<ChangePassword />} />
          <Route path="systeminfo" element={<SystemInfo />} />
          <Route path="quite" element={<Quite />} />
        </Route>
        <Route path="/master" element={<Master />} />
        <Route path="/transaction" element={<Transaction />} />
        <Route path="/report" element={<Report />} />
        <Route path="/print" element={<Print />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
