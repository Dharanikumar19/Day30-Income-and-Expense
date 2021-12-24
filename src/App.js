import logo from './logo.svg';
import './App.css';
import Dashboard from './Dashboard';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import './sb-admin-2.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import ListIncomeExpense from './ListIncomeExpense';
import AddIncomeAndExpense from './AddIncomeAndExpense';




function App() {
  return (
    <>
    <BrowserRouter>
      <div id="wrapper">
        <Sidebar/>
        <div id="content-wrapper" class="d-flex flex-column">
         <div id="content">
        <Topbar/>
        <div class="container-fluid">
          <Routes>
            <Route path="/dashboard" element={<Dashboard/>}></Route>
            <Route path="/user-list" element={<ListIncomeExpense/>}></Route>
            <Route path="/add-report" element={<AddIncomeAndExpense/>}></Route>
            
            
           
          </Routes>
        </div>
          </div>
        </div>
      </div>
      </BrowserRouter>
      </>
  );
}

export default App;
