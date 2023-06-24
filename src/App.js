import logo from './logo.svg';
import './App.css';
import TaskListComponent from './components/container/task_list';
import ContactList from './components/container/ContactsList';
import Greetingstyled from './components/pure/greetingStyled';
import ClockClass from './components/container/ClockClass';
import ClockFunction from './components/container/ClockFuntion';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* Componente de Listado de Tareas */}
        {/* <TaskListComponent /> */}
        {/* Componente de Listado de contactos */}
        {/* <ContactList/> */}
        {/* <Greetingstyled name="Martín" /> */}
        <h1>Componente de Clase:</h1>
        <ClockClass />
        <h1>Componente Funcional:</h1>
        <ClockFunction />
      </header>
    </div>
  );
}

export default App;
