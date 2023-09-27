import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Accueil from "./pages/Accueil";
import Produits from "./pages/Produits";

function App() {
  return (
    <div className="App">
      <Router basename="/projet1/build">
        <Navbar />
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/produits" element={<Produits />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
