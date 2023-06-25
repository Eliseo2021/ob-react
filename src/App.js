import './App.css';
import TaskListComponent from './components/container/task_list';
import ContactsList from './components/container/ContactsList';
import ColorChangingComponent from './components/container/ColorChangingComponent';

function App() {
  return (
    <div className="App">
        <TaskListComponent />
        <ContactsList />
        <ColorChangingComponent />
    </div>
  );
}

export default App;
