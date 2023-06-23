import logo from './logo.svg';
import './App.css';
import TaskListComponent from './components/container/task_list';
import ContactList from './components/container/ContactsList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* Componente de Listado de Tareas */}
        {/* <TaskListComponent /> */}
        {/* Componente de Listado de contactos */}
        <ContactList/>
      </header>
    </div>
  );
}

export default App;
