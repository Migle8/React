import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Registration from "./pages/Registration";
import NavBar from "./components/NavBar";
import DonorsListPage from "./pages/DonorsListPage";
import { useState, useEffect  } from "react";
import { getAllData } from "./services/get";
import PageNotFound from "./pages/PageNotFound";
import Footer from "./components/Footer";

function App() {
  const [donor, setDonor] = useState([]);
  const [update, setUpdate] = useState(0);

  const fetchData = async () => {
      const response = await getAllData();
      setDonor(response);
  }

  useEffect(() => {
    fetchData();
  }, [update]);

function handleAddDonor(donor) {
  setDonor((donors) => [...donors, donor]);
}

  return (
    <>
      <NavBar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="registration" element={<Registration onAddDonor={handleAddDonor} setUpdate={setUpdate} />} />
        <Route path="donors" element={<DonorsListPage donors={donor}  />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </>
  )
}



export default App
