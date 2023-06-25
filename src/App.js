import './App.css';
import TaskListComponent from './components/container/task_list';
import ContactsList from './components/container/ContactsList';

function App() {
  return (
    <div className="App">
        <TaskListComponent />
        <ContactsList />
    </div>
  );
}

export default App;
