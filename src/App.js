import { BrowserRouter as Router } from 'react-router-dom';
import './App.scss';
// Components
import Navbar from './components/Navbar';
// import Home from './Pages/Home';
// import Services from './Pages/Services';
// import ContactUs from './Pages/ContactUs';
// import SignUp from './Pages/SignUp.js';
import Routes from './Routes';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes />
      </div>
    </Router>
  );
}

export default App;
