import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

// STYLES
import "../src/styles/App.scss";

// IMPORTS

// PAGES AND COMPONENTS
import Navbar from "./components/navBar/Navbar";
import CoverBank from "./pages/cover-bank/CoverBank";
import About from "./pages/about/About";
import SingleCover from "./pages/single-cover/SingleCover";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="App-container">
          <Routes>
            <Route exact path="/" element={<CoverBank />} />
            <Route path="/about" element={<About />} />
            <Route path="/cover-bank/:id" element={<SingleCover />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
