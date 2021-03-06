import './index.css'
import chubs from './helpers/chubs';
import DisplayChubs from './components/displayChubs';
import backRoomItems from './helpers/backroomItems';


function App() {
  return (
    <div className="App h-full min-h-screen bg-blue-600 bg-opacity-75">      
      <p className='bg-gray-400 rounded m-5 p-3'>Tap buttons to increase/decrease, enter the total weight after scanning barcode as lbs</p>
      <DisplayChubs chubs={chubs} backRoomItems={backRoomItems}/>
    </div>
  );
}

export default App;
