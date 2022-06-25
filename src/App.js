import "./App.css";
import Services from "./components/Services/Services";
import TopBanner from "./components/TopBanner/TopBanner";
import TopNavigation from "./components/TopNavigation/TopNavigation";

function App() {
  return (
    <div>
      <TopNavigation />
      <TopBanner />
      <Services />
    </div>
  );
}

export default App;
