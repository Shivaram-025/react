/*
7. Develop a React Application featuring a ProfileCard component to display a user’s profile information,
including their name, profile picture, and bio. The component should demonstrate flexibility by utilizing
both external CSS and inline styling for its design. Display the following information: Profile picture,
User’s name, A short bio or description Use an external CSS file for overall structure and primary styles,
such as layout, colors, and typography. Apply inline styles for dynamic or specific styling elements,
such as background colors or alignment. Design the ProfileCard to be visually appealing and responsive.
Ensure the profile picture is displayed as a circle, and the name and bio are appropriately styled.
Add hover effects or animations to enhance interactivity. Allow the background color of the card to
change dynamically based on a prop or state.
*/

import './App.css';
import ProfileCard from './ProfileCard';

const App = () => {
  return (
    <div className="App">
      <ProfileCard
        name="vtucircle"
        bio="vtucircle is the website which provides all the required VTU notes, syllabus, model papers, previous 
             year papers of 2021 | 2022 scheme for BE students."
        profilePicture="https://vtucircle.com/wp-content/uploads/2024/11/cropped-vtucircle_icon-1.png"
      />
    </div>
  );
};

export default App;