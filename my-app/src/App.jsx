import { BrowserRouter as Router, Route, Routes, Navigate, BrowserRouter } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      {/* This component scrolls to the top on route change */}
      <ScrollToTop />

      {/* Define routes for the Homepage */}
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </Router>
  );
}

export default App;
