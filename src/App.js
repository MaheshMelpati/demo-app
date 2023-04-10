import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import EmpData from './components/EmpDetails/EmpData';
import EmpNew from './components/EmpDetails/EmpNew';
import EmpUpdate from './components/EmpDetails/EmpUpdate';

function App() {
  return (
  <>
  <Routes>
    <Route path='/' element={<EmpData />} />
    <Route path='emp-new' element={<EmpNew />} />
    <Route path='emp-update' element={<EmpUpdate />} />
  </Routes>
  {/* <EmpData /> */}
  </>
  );
}

export default App;
