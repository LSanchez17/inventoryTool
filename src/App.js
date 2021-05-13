import './App.css';
import chubs from './helpers/chubs';
import DisplayChubs from './components/displayChubs';


function App() {

  return (
    <div className="App bg-white-200">      
      <p className='bg-gray-400 rounded m-5 p-3'>increase and decrease the count to get the answer</p>
      <DisplayChubs chubs={chubs} />
    </div>
  );
}

export default App;
