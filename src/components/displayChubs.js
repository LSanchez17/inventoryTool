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
    let [boarsHead, setBoarsHead] = useState();
    let [privateSelection, setPrivateSelection] = useState();
    
    useEffect(() => {
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
        //only show the children who belong to private selection
        setSections(privateSelection);
    }

    const showBH = () => {
        //only show the children who belong to boar's
        setSections(boarsHead);
    }

    return (
        <div>
            <button className='bg-black text-yellow-300 rounded-2xl border-4 p-2 m-2' onClick={showBH}>Show Boar's Head</button>
            <button className='bg-blue-500 text-white rounded-2xl border-4 p-2 m-2' onClick={showPS}>Show Private Selection</button>
            {sections}
        </div>
    );
}

export default DisplayChubs;