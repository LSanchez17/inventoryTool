import { useState } from "react"
import ChubCounter from './ChubCounter'
import FinalWeight from './finalWeight'
import UPC from './UPC'

const InventoryItem = ({ identifier, name, weight, upc, count}) => {
    let [itemCount, setCount] = useState(count);

    let upDoot = async () => {
        await setCount(itemCount + 1);
    }

    let downDoot = async () => {
        if(itemCount === 0){
            return;
        }
        await setCount(itemCount - 1);
    }

    let countId = `count${identifier}`;
    let weightId = `weight${identifier}`;
    let idNumber = Math.random() * weight;

    return (
        <div className='bg-blue-300 font-bold shadow-md font-sans rounded-2xl border-4 border-blue-500 border-opacity-25 m-2 p-1' key={idNumber}>
            <h2>{name}</h2>
            <h3 id={weightId}>Weight: {weight}lbs</h3>
            <ChubCounter countId={countId} count={itemCount} plusOne={upDoot} minusOne={downDoot} />
            <UPC upc={upc} />
            <FinalWeight weight={weight} count={itemCount} />
        </div>
    );
}

export default InventoryItem;