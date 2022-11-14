import { useEffect, useState } from "react";
import Content from "./components/Content/Content";
import Sidebar from "./components/Sidebar/Sidebar";
import BrandsData from "./brands.json";
import MainContext from "./MainContext";
import Copied from "./components/Copied/Copied";

function App() {
  let brandsArray = [];
  Object.keys(BrandsData).forEach((key) => brandsArray.push(BrandsData[key]));

  const [brands, setBrands] = useState(brandsArray);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [copied, setCopied] = useState(false)

  const data = {
    brands,
    setBrands,
    selectedBrands,
    setSelectedBrands,
    setCopied
  };

  useEffect(() => {

    const timeout = setTimeout(()=>{
      setCopied(false)
    },1000)
    return () => {
      clearTimeout(timeout)
    }
  }, [copied])
  

  return (
    <>
      <MainContext.Provider value={data}>
        {copied && <Copied color={copied} />}
        <Sidebar />
        <Content />
      </MainContext.Provider>
    </>
  );
}

export default App;
