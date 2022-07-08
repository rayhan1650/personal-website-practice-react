import "./App.css";
import Analysis from "./components/Analysis/Analysis";
import ClientReview from "./components/ClientReview/ClientReview";
import Courses from "./components/Courses/Courses";
import Footer from "./components/Footer/Footer";
import RecentProjects from "./components/RecentProjects/RecentProjects";
import Services from "./components/Services/Services";
import Summary from "./components/Summary/Summary";
import TopBanner from "./components/TopBanner/TopBanner";
import TopNavigation from "./components/TopNavigation/TopNavigation";
import Video from "./components/Video/Video";

function App() {
  return (
    <div>
      <TopNavigation />
      <TopBanner />
      <Services />
      <Analysis />
      <Summary />
      <RecentProjects />
      <Courses />
      <Video />
      <ClientReview />
      <Footer />
    </div>
  );
}

export default App;
