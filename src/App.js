import './App.css';
import Banking from './Components/Banking';
import Boost from './Components/Boost';
import Header from './Components/Header';
import Main from './Components/Main';
import Payments from './Components/Payments';
import "./App.css";
import Investing from './Components/Investing';
import Footer from './Components/Footer';
function App() {
  return (
    <div className="App">
      
      <Header/>
      <Main className="page"/>
      <Payments className="page"/>
      <Banking className="page"/>
      <Boost className="page"/> 
      <Investing className= "page"/>
    </div>
  );
}


export default App;
