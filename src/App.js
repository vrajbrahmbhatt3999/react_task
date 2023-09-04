import './App.css';
import PrivateRoute from './components/auth/privateRoute/PrivateRoute';
import Dashboard from './components/dashboard/Dashboard';
import EmployeeForm from './components/employeeForm/EmployeeForm';
import Login from './components/login/Login';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/dashboard"
            element={<PrivateRoute element={<Dashboard />} />}
          />
            <Route
            path="/employee-form"
            element={<PrivateRoute element={<EmployeeForm />} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
