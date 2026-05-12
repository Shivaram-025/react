// App.js

/*
5. Develop a React application that demonstrates component composition and the use of props to pass data.
Create two components: FigureList: A parent component responsible for rendering multiple child components.
BasicFigure: A child component designed to display an image and its associated caption.
Use the FigureList component to dynamically render multiple BasicFigure components.
Pass image URLs and captions as props from the FigureList component to each BasicFigure component.
Style the BasicFigure components to display the image and caption in an aesthetically pleasing manner.
Arrange the BasicFigure components within the FigureList in a grid or list format.
Allow users to add or remove images dynamically. Add hover effects or animations to the images for an interactive experience.
*/

import './App.css';
import FigureList from './components/FigureList';

const App = () => {
  return (
    <div className="app">
      <h1>Dynamic Image Gallery</h1>
      <FigureList />
    </div>
  );
};

export default App;