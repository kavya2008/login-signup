import { Route, Routes } from 'react-router-dom';

import { AuthContextProvider } from './context/AuthContext';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import Navbar from './Navbar';

function App() {
  return (
    <>
      <AuthContextProvider>
      <Navbar />
        <Routes>
         <Route path='/'element={<Home/>}></Route>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;