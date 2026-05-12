/*
9. Design a React application that demonstrates the implementation of routing using the react-router-dom library.
The application should include the Navigation Menu: Create a navigation bar with links to three distinct
pages, Home, About, Contact. Develop separate components for each page (Home, About, and Contact) with
appropriate content to differentiate them. Configure routes using react-router-dom to render the corresponding
page component based on the selected link. Use BrowserRouter and Route components for routing.
Highlight the active link in the navigation menu to indicate the current page.
*/

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <div style={{ padding: '20px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;