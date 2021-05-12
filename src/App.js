import './App.css';
import jsBarcode from 'jsbarcode';
import chubs from './helpers/chubs';
import DisplayChubs from './components/displayChubs';

function App() {

  return (
    <div className="App">      
      <p>increase and decrease the count to get the answer</p>
      <DisplayChubs chubs={chubs} />
    </div>
  );
}

export default App;
