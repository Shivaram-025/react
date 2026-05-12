/*
6. Design and implement a React Form that collects user input for name, email, and password.
Form Fields are Name, Email, Password. Ensure all fields are filled before allowing form submission.
Validate the email field to ensure it follows the correct email format (e.g., example@domain.com).
Optionally enforce a minimum password length or complexity. Display error messages for
invalid or missing inputs. Provide visual cues (e.g., red borders) to highlight invalid fields.
Prevent form submission until all fields pass validation. Log or display the entered data upon
successful submission (optional). Add a “Show Password” toggle for the password field.
Implement client-side sanitization to ensure clean input.
*/

import './App.css';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <Form />
    </div>
  );
}

export default App;