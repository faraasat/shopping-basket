import { Routes, Route } from "react-router-dom";
import ExploreComponent from "./pages/Explore/explore.component";
import HomeComponent from "./pages/Home/home.component";
import NavbarComponent from "./components/Navbar/navbar.component";
import ItemDetailsComponent from "./pages/ItemDetails/item-details.component";

const RouteConfig = () => {
  return (
    <>
      <NavbarComponent />
      <Routes>
        <Route exact path="/" element={<HomeComponent />} />
        <Route exact path="/explore" element={<ExploreComponent />} />
        <Route
          exact
          path="/explore/:exploreItemId"
          element={<ItemDetailsComponent />}
        />
      </Routes>
    </>
  );
};

export default RouteConfig;
