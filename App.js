import logo from './logo.svg';
import './App.css';
import mysty from './Mystyle';

function App() {
  return (
    <div className="App">
      <h1 style={{backgroundColor:"black",color:"red"}}>welcome</h1>
      <div style={mysty}></div>
      <div style={mysty.header}></div>
      <img src={require("./images/sci.JPG")}alt="" />
      <i className='fa fa-user'></i>


    </div>
  );
}

export default App;
