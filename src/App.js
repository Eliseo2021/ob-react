import './App.css';
import TaskListComponent from './components/container/task_list';
import ContactsList from './components/container/ContactsList';
import Loginformik from './components/pure/forms/loginFormik';
import Registerformik from './components/pure/forms/registerFormik';
import Taskform from './components/pure/forms/taskForm';



function App() {
  return (
    <div className="App">
      <TaskListComponent />
      {/* <ContactsList /> */}
      {/* Ejemplos de uso de Formik y Yup */}
      {/* <Loginformik/>  */}
      {/* <Registerformik/> */}
        {/* <Taskform /> */}

    </div>
  );
}

export default App;
