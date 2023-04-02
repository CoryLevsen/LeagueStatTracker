import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Leaderboards from "./pages/Leaderboards";
import Search from "./pages/Search";
import SelectTeams from "./pages/SelectTeams";
import CenterContainer from "./components/Container/Container";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <CenterContainer>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/select-teams" element={<SelectTeams />} />
          <Route path="/leaderboards" element={<Leaderboards />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </CenterContainer>
    </>
  );
}

export default App;
