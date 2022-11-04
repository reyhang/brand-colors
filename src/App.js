import { useState } from "react";
import Content from "./components/Content/Content";
import Sidebar from "./components/Sidebar/Sidebar";
import BrandsData from './brands.json'
import MainContext from "./MainContext";



function App() {

  const brandsArray = []
  Object.keys(BrandsData).map(key =>
    (brandsArray.push(BrandsData[key]))
  )

  const [brands, setBrands] = useState(brandsArray)
  const [selectedBrands, setSelectBrands] = useState([])
  
  const data = {
    brands,
    setSelectBrands,
  }

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
