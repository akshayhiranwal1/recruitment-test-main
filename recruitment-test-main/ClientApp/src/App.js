import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import AddEmployee from './AddEmployee';
import UpdateEmployee from './UpdateEmployee';
import Employees from './Employees';

const App = () => {
  return (
    <Router>
      <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to={'/'}>List</Link>
              </li>
              <li className="nav-item">
                <Link to={'/AddEmployee'}>Add Employee</Link>
              </li>
            </ul>
      </div>
      <Routes>
          <Route path="/" element={<Employees/>} />
          <Route path="/AddEmployee" element={<AddEmployee/>} />
          <Route path="/edit" element={<UpdateEmployee/>} />
      </Routes>
    </Router>
  );
}

export default App;
