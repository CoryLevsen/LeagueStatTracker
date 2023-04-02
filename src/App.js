import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Leaderboards from "./pages/Leaderboards";
import Search from "./pages/Search";
import SelectTeams from "./pages/SelectTeams";
import CenterContainer from "./components/Container/Container";

function App() {
  let component;
  switch (window.location.pathname) {
    case "/":
      component = <Home />;
      break;
    case "/select-teams":
      component = <SelectTeams />;
      break;
    case "/leaderboards":
      component = <Leaderboards />;
      break;
    case "/search":
      component = <Search />;
      break;
  }
  return (
    <>
      <Navbar />
      <CenterContainer>{component}</CenterContainer>
    </>
  );
}

export default App;
