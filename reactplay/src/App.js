import logo from './logo.svg';
import './App.css';
import Employee from "./Employee";
import UserProfile from "./components/UserProfile";

const employees = [];
employees.push(new Employee("Daniel Fielden", "Learner", "images/dannyimg.jpg"));
employees.push(new Employee("Gubby", "Genius", "images/gubbyimg.jpg"));
employees.push(new Employee("Seal", "chief relaxer", "images/seal.jpg"));
employees.push(new Employee("Deer", "Grass eater", "images/deer.jpg"));

function App() {
  return (
    <div className="App">
        <UserProfile
            employee={employees[0]}
        />
        <UserProfile
            employee={employees[1]}
        />
        <UserProfile
            employee={employees[2]}
        />
        <UserProfile
            employee={employees[3]}
        />
    </div>
  );
}

export default App;
