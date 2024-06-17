import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Profile from './pages/Profile'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
// import

export default function App() {
  return <BrowserRouter>
 <Routes> 
  <Route path='/' element={<Home/>}/>
  <Route path='/Profile' element={<Profile/>}/>
  <Route path='/SignIn' element={<SignIn/>}/>
  <Route path='/SignUp' element={<SignUp/>}/>
  </Routes>
 </BrowserRouter>
  
}
