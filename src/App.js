import {Routes, Route,useLocation} from 'react-router-dom'

import { AdminRoute } from './AdminRouter.js';
import Header from './components/header/Header'
import Login from './components/login/Login'


function App() {
  const location = useLocation()
  let checkLocation = true
  if(location.pathname === '/login'){
    checkLocation = false
  }

  return (
    <div className="App">
      {checkLocation && <Header/>}
      <Routes>
        <Route path='/login' element= {<Login/>}/>
        { 
          AdminRoute.map((item, index) => (
            <Route key={index} path={item.path} element={item.component}/>
          ))
        }
      </Routes>
    </div>
  );
}

export default App;
