import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AddIngredients from "./pages/addIngredients";

const App = () => {

  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/add-ingredients">Add Ingredients</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/add-ingredients" element={<AddIngredients />} />
      </Routes>
    </Router>
  );
};

export default App;
