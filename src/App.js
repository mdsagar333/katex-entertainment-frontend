import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import Dashboard from "./pages/dashboard/Dashboard";
import AddHeroBanner from "./pages/dashboard/AddHeroBanner";
import AddWallet from "./pages/dashboard/AddWallet";
import AddFeature from "./pages/dashboard/AddFeature";
import BannersList from "./pages/dashboard/BannersList";
import WalletLists from "./pages/dashboard/WalletLists";
import FeatureLists from "./pages/dashboard/FeatureLists";
import UpdateContentComponent from "./pages/dashboard/UpdateContentComponent";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="bannerLists" element={<BannersList />}></Route>
          <Route path="addHeroBanner" element={<AddHeroBanner />}></Route>
          <Route path="walletLists" element={<WalletLists />}></Route>
          <Route path="addWallet" element={<AddWallet />}></Route>
          <Route path="featureLists" element={<FeatureLists />}></Route>
          <Route path="addFeature" element={<AddFeature />}></Route>
          <Route
            path="update/:collection/:id"
            element={<UpdateContentComponent />}
          ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

// <Home />

export default App;
