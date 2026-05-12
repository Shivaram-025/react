/*
2. Develop a React application that demonstrates the use of props to pass data from a parent component
to child components. The application should include the parent component named App that serves as the
central container for the application. Create two separate child components, Header: Displays the
application title or heading. Footer: Displays additional information, such as copyright details or a tagline.
Pass data (e.g., title, tagline, or copyright information) from the App component to the Header and
Footer components using props. Ensure that the content displayed in the Header and Footer components
is dynamically updated based on the data received from the parent component.

npx create-react-app react-props-demo
*/

import './App.css';
import Footer from './Footer';
import Header from './Header';

function App() {
  const title = "Welcome to My React App";
  const tagline = "Building great apps with React";
  const copyright = "© 2025 MyApp, All Rights Reserved";

  return (
    <div className="App">
      <Header title={title} />
      <Footer tagline={tagline} copyright={copyright} />
    </div>
  );
}

export default App;