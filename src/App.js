import './App.css';
import Homebody from './components/Homebody';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import './Sidebar.css';
import './Homebody.css';
import Topsongs from './components/Topsongs';
import './Topsongs.css';




function App() {
  return (
    <>
    <Navbar title ='MyMusicApp' navoption='About us'/> 
    <Sidebar/>
    <Homebody/>
    <Topsongs/>          
    </>
  )}

export default App;
