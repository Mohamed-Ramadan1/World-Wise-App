import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { CitesProvider } from "./contexts/CitiesContext";

import Homepage from "./pages/Homepage/Homepage";
import Pricing from "./pages/Pricing/Pricing";
import PageNotFound from "./pages/GenralPages/PageNotFound";
import Product from "./pages/Product/Product";
import AppLayout from "./pages/AppLayout/AppLayout";
import Login from "./pages/Login/Login";
import CityList from "./components/Citys/CityList";
import CountryList from "./components/Counterys/CountryList";
import City from "./components/Citys/City";
import Form from "./components/Form/Form";

const App = () => {
  return (
    <CitesProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="product" element={<Product />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="app" element={<AppLayout />}>
            <Route index element={<Navigate replace to="cities" />} />
            <Route path="cities" element={<CityList />} />
            <Route path="cities/:id" element={<City />} />
            <Route path="countries" element={<CountryList />} />
            <Route path="form" element={<Form />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </CitesProvider>
  );
};

export default App;
