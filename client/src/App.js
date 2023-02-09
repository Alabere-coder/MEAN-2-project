import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Dashboard from "./pages/Dashboard"
import Register from "./pages/Register"
import Login from "./pages/Login"



function App() {
  return (
    <>
      <div className="container">
        <Header />
        <Routes>
          <Route exact path='/' element={<Dashboard />} />
          <Route exact path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
