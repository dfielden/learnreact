import './App.css';
import {ProfileGallery} from "./components/ProfileGallery";

// const employees = [];
// employees.push(new Employee("Daniel Fielden", "Learner", "images/dannyimg.jpg"));
// employees.push(new Employee("Gubby", "Genius", "images/gubbyimg.jpg"));
// employees.push(new Employee("Seal", "chief relaxer", "images/seal.jpg"));
// employees.push(new Employee("Deer", "Grass eater", "images/deer.jpg"));

function App() {

    return (
        <div className="App">
            <h1>Danny page</h1>
            <ProfileGallery/>
        </div>
    );
}

export default App;
