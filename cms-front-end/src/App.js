import './App.css';
import Login from './Components/Login';
import StudentsDetails from './Components/StudentsDetails';


function App() {
  return (
    <div className="App">
      <div>
        <h1>Login Page</h1>
        <Login />
      </div>

      <div>
        <h1>Student Details</h1>
        <StudentsDetails />
      </div>

    </div>
  );
}

export default App;
