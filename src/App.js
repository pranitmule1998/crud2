
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import Add from './components/Add.js';
import Show from './components/Show.js';
import Update from './components/Update.js';
import Delete from './components/Delete.js';
import Navbar from './components/Navbar.js';
function App() {
  return (
    <div className="App">
<BrowserRouter>
<Navbar/>
<Routes>
  <Route path='/add' element={<Add/>}></Route>
  <Route path='/show' element={<Show/>}></Route>
  <Route path='/update/:studentId' element={<Update/>}></Route>
  <Route path='/delete/:studentId' element={<Delete/>}></Route>
</Routes>
</BrowserRouter>
    </div>
  );
}

export default App;
