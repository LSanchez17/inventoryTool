import PrivateOnly from './PrivateOnly';
import BoarsOnly from './BoarsOnly';
import InventoryItem from './InventoryItem'
import {useState, useEffect} from 'react'

const DisplayChubs = ({chubs}) => {
    let meatChub = chubs.map((chub,idx) => {
        let className = `${chub.type} grid grid-cols-1 gap-2 place-items-center`
        return <div key={idx} className={className}>
                    <InventoryItem key={idx} 
                              identifier={idx}
                              type={chub.type}
                              name={chub.name} 
                              weight={chub.weight} 
                              upc={chub.upc}
                              count={chub.count} />
                </div>
      });

    //save rendered children for iteration
    //default renders every item
    let INIT = meatChub;
    let [sections, setSections] = useState(INIT);
    //keeps track of both lists when split
    let [boarsHead, setBoarsHead] = useState();
    let [privateSelection, setPrivateSelection] = useState();
    //keeps track of which to show and hide
    let [privateOnly, setPrivateOnly] = useState(false);
    let [boarsOnly, setBoarsOnly] = useState(false);

    useEffect(() => {
        //split main chub list into two
        let bh = [];
        let ps = [];

        sections.forEach(chub => {
            if(chub.props.children.props.type === 'PS'){
                ps.push(chub);
            }
            if(chub.props.children.props.type === 'BH'){
                bh.push(chub);
            }
        });

        setBoarsHead(bh);
        setPrivateSelection(ps);
    }, [])
    
    const showPS = () => {
        //update state and save it
        setPrivateOnly(privateSelection => !privateSelection);
    }

    const showBH = () => {
        //update state and save it
        setBoarsOnly(boarsHead => !boarsHead);
    }

    return (
        <div>
            <button className='bg-black text-yellow-300 rounded-2xl border-4 p-2 m-2' onClick={showBH}>Show Boar's Head</button>
            <button className='bg-blue-500 text-white rounded-2xl border-4 p-2 m-2' onClick={showPS}>Show Private Selection</button>
            {privateOnly ? <PrivateOnly chubs={privateSelection} /> : sections}
            {boarsOnly ? <BoarsOnly chubs={boarsHead} /> : sections}
        </div>
    );
}

export default DisplayChubs;