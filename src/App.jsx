import './App.css'
import { Routes, Route } from 'react-router'
import GuestLayout from './layouts/GuestLayout'
import UserLayout from './layouts/UserLayout'
import GuestDash from './pages/GuestDash'
import AuthFormContainer from './pages/AuthFormContainer'
import SignInForm from './components/forms/SignInForm'
import SignUpForm from './components/forms/SignUpForm'
import CurriculamForm from './components/forms/CurriculamForm'
import CurriculamPage from './pages/CurriculamPage'

function App() {

  return (
    <Routes>
      
      {/* Guest  */}
      <Route path="" element={<GuestLayout/>}>
        <Route index element={<GuestDash/>}/>
        <Route path='auth' element={<AuthFormContainer/>}>
        <Route path='login' element={<SignInForm/>}/>
        <Route path='register' element={<SignUpForm/>}/>
      </Route>
      </Route>

      {/* User */}
      <Route path="user" element={<UserLayout/>}>
        <Route path="" element={<CurriculamForm/>}/>
        <Route path="curriculam" element={<CurriculamPage/>}/>
      </Route>
    </Routes>
  )
}

export default App
