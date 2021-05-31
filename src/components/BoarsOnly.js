import { useEffect } from 'react';
import InventoryItem from './InventoryItem'

const BoarsOnly = ({chubs, show}) => {
    let divAttribute = '';

    useEffect(() => {
        if(show){
            divAttribute = 'visible';
        }
        else{
            divAttribute = 'invisible';
        }
    },[show]);

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

    return(
    <div className={divAttribute}>
    {meatChub}
    </div>
    )
}

export default BoarsOnly