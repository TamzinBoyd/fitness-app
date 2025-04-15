import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AddIngredients from './pages/addIngredients';
import ComponentTestPage from './pages/ComponentTestPage';

const App = () => {
    return (
        <Router>
            <nav>
                <ul>
                    <li
                        className="w-screen border border-secondaryBlue flex flex-wrap justify-center
                    "
                    >
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
                <Route path="/test" element={<ComponentTestPage />} />
                <Route path="/weights" element={<p>weights page</p>} />
            </Routes>
        </Router>
    );
};

export default App;
