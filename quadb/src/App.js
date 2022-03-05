import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Container } from 'react-bootstrap';
import { Header } from './components/Header'
import { HomeScreen } from './screens/HomeScreen'
import { DetailScreen } from './screens/DetailScreen'

function App() {
  return (
    <Router>
      <Header/>
      <Container>
        <Routes>
          <Route path="/" element={<HomeScreen/>} exact />
          <Route path="/show/:id" element={<DetailScreen/>} exact />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
