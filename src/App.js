import logo from './logo.svg';
import './App.css';
import Task from "./components/Task"

function App() {
  return (
<div className="App">
      <h1>Tasky</h1>
	  <Task title="Dishes" deadline="Today" />
	  <Task title="Laundry" deadline="Tomorrow" description="And fold them up" />
	  <Task title="Tidy" deadline="Today" />
	  <Task title="Do assignments" deadline="Tomorrow" description="do programing assignment" />
    </div>
 );
}

export default App;
