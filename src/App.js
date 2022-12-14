import { useEffect, useState } from "react";
import Content from "./components/Content/Content";
import Sidebar from "./components/Sidebar/Sidebar";
import BrandsData from "./brands.json";
import MainContext from "./MainContext";
import Copied from "./components/Copied/Copied";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Collection from "./components/Collection/Collection";

function App() {
  let brandsArray = [];
  Object.keys(BrandsData).forEach((key) => brandsArray.push(BrandsData[key]));

  const [brands, setBrands] = useState(brandsArray);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [copied, setCopied] = useState(false)
  const [search, setSearch] = useState('')

  const data = {
    brands,
    setBrands,
    selectedBrands,
    setSelectedBrands,
    setCopied,
    search,
    setSearch
  };

  useEffect(() => {

    const timeout = setTimeout(()=>{
      setCopied(false)
    },1000)
    return () => {
      clearTimeout(timeout)
    }
  }, [copied])

  useEffect(()=>{
    setBrands(brandsArray.filter(brand => brand.title.toLowerCase().includes(search)))
  //eslint-disable-next-line
  },[search])
  

  return (
    <>
      <MainContext.Provider value={data}>
        {copied && <Copied color={copied} />}
        <Sidebar />
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Content/>} />
          <Route path="/collection/:slugs" element={<Collection/>}/>
        </Routes>
        </BrowserRouter>
      </MainContext.Provider>
    </>
  );
}

export default App;
