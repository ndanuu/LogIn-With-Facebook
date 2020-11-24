import logo from './logo.svg';
import './App.css';
import FaceBook from './components/FaceBook';
function App() {
  return (
    <div className="App">
     <h1 className="App-title">Facebook Auth Example </h1>
     <p>To get started, authenticate with Facebook.</p>

     <FaceBook/>
    </div>
  );
}

export default App;
