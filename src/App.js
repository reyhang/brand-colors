import { useState } from "react";
import Content from "./components/Content/Content";
import Sidebar from "./components/Sidebar/Sidebar";
import BrandsData from "./brands.json";
import MainContext from "./MainContext";

function App() {
  let brandsArray = [];
  Object.keys(BrandsData).forEach((key) => brandsArray.push(BrandsData[key]));

  const [brands, setBrands] = useState(brandsArray);
  const [selectedBrands, setSelectedBrands] = useState([]);

  const data = {
    brands,
    setBrands,
    selectedBrands,
    setSelectedBrands,
  };

  return (
    <>
      <MainContext.Provider value={data}>
        <Sidebar />
        <Content />
      </MainContext.Provider>
    </>
  );
}

export default App;
