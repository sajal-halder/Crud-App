import './App.css'
import HomePage from './pages/Home'
import { Route,Routes } from 'react-router-dom'
import AboutPage from './pages/About'
import ContactPage from './pages/Contact'
import Header from './component/header'

function Layout() {
  return (
    <>
    
    <Header/>
    <Routes>
      <Route index path='home' element={<HomePage/>}/>
      <Route path='about/*' element={<AboutPage/>}/>
      <Route path='contact' element={<ContactPage/>}/>
    </Routes>
    </>
  )
}

export default Layout
