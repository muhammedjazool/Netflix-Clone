import './App.css';


import NavBar from './components/Navbar/NavBar';
import Banner from './components/Banner/Banner';
import RowPost from './components/RowPost/RowPost';
import {originals,action} from './urls'

function App() {
  return (
    <>
    <NavBar/>
    <Banner/>
    <RowPost url= {originals} title='Netflix Originals'/>
    <RowPost url={action} title='Actions' isSmall />
    </>
  );
}

export default App;
