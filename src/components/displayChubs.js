import InventoryItem from './InventoryItem'
import {useState} from 'react'

const DisplayChubs = ({chubs}) => {

    let meatChub = chubs.map((chub,idx) => {
        return <div key={idx} className='grid grid-cols-1 gap-2 place-items-center'>
                    <InventoryItem key={idx} 
                              identifier={idx}
                              type={chub.type}
                              name={chub.name} 
                              weight={chub.weight} 
                              upc={chub.upc}
                              count={chub.count} />
                </div>
      });

    let INIT = meatChub;
    let [sections, setSections] = useState(INIT);
    
    const showPS = () => {
        let PSOnly = [];
        INIT.forEach((chub) => {
            if(chub.props.children.props.type === 'PS'){
                PSOnly.push(chub);
            }
        });

        setSections(PSOnly);
    }

    const showBH = () => {
        let BHOnly = [];
        INIT.forEach((chub) => {
            if(chub.props.children.props.type === 'BH'){
                BHOnly.push(chub);
            }
        });

        setSections(BHOnly);
    }
    console.log(INIT)

    return (
        <div>
            <button className='bg-black text-yellow-300 rounded-2xl border-4 p-2 m-2' onClick={showBH}>Show Boar's Head</button>
            <button className='bg-blue-500 text-white rounded-2xl border-4 p-2 m-2' onClick={showPS}>Show Private Selection</button>
            {sections}
        </div>
    );
}

export default DisplayChubs;