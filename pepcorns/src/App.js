import './css/App.css';
import { Header } from './components/Header'
import { CTAs } from './components/CTAs';
import { Profile } from './components/Profile';
import { Right } from './components/Right';
import { Left } from './components/Left';
import Container from '@mui/material/Container'

function App() {
  return (
    <Container className="App mb-5">
      <Header/>
      <Container>
        <CTAs/>
        <Profile/>
        <div style={{ display:'flex' }} className='mt-5'>
          <Left style={{ flex:0.65 }}/>
          <Right style={{ flex:0.3 }}/>
        </div>
      </Container>
    </Container>
  );
}

export default App;
