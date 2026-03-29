import './App.css';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import About from "./Pages/About.jsx";
import Contact from "./Pages/Contact.jsx";
import Nav from "./components/Nav.jsx"
import Users from './Pages/Users.jsx';

function App() {
  return (
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/users/:id" element={<Users />} />
        </Routes>
      </Router>
  );
}

export default App;
