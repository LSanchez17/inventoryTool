import { useState } from "react"
import ChubCounter from './ChubCounter'
import FinalWeight from './finalWeight'
import UPC from './UPC'

const InventoryItem = ({ identifier, type, name, weight, upc, count}) => {
    //keeps track of how many chubs of an individual item
    let [itemCount, setCount] = useState(count);

    let upDoot = async () => {
        //updoot
        await setCount(itemCount + 1);
    }

    let downDoot = async () => {
        //downdoot, but only if we are above zero, no negatives
        if(itemCount === 0){
            return;
        }
        await setCount(itemCount - 1);
    }

    //identifiers for later usage if needed
    let countId = `count${identifier}`;
    let weightId = `weight${identifier}`;
    let idNumber = Math.random() * weight;
    let className = `bg-blue-300 font-bold shadow-md font-sans rounded-2xl border-4 border-blue-500 border-opacity-25 m-2 p-1`;

    return (
        <div className={className} key={idNumber}>
            <h2>{name}</h2>
            <h3 id={weightId}>Weight: {weight}lbs</h3>
            <ChubCounter countId={countId} count={itemCount} plusOne={upDoot} minusOne={downDoot} />
            <UPC upc={upc} type={type}/>
            <FinalWeight weight={weight} count={itemCount} />
        </div>
    );
}

export default InventoryItem;