import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { LogoutComponent } from './components/LogoutComponent'
import { Header } from './components/Header'
import { HomeScreen } from './screens/HomeScreen'
import { LoginScreen } from './screens/LoginScreen'
import { RegisterScreen } from './screens/RegisterScreen'
import './App.css';

function App() {

  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin

  return (
    <Router>
      <Header/>
      {userInfo && <LogoutComponent/>}
      <Container style={{ width:"100%" }} className='mx-auto pt-3 mt-0 mb-2'>
        <Routes>
          <Route path="/login" element={<LoginScreen/>} exact />
          <Route path="/register" element={<RegisterScreen/>} exact />
          <Route path="/" element={<HomeScreen/>} exact />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
