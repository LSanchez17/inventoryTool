import { useState } from "react"
import FinalWeight from './finalWeight';

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
        <div className='shadow-md font-sans rounded-2xl border-4 border-blue-500 border-opacity-25 m-2 p-1' key={idNumber}>
            <h2>{name}</h2>
            <h3 id={weightId}>Weight: {weight}lbs</h3>
            <button className='hover:bg-blue-700 rounded-full py-1 px-1 border-2 m-2 border-blue-800' onClick={upDoot}>Increase</button>
            <h3 id={countId}># of chubs: {itemCount}</h3>
            <button className='hover:bg-red-700 rounded-full py-1 px-1 border-2 m-2 border-red-800' onClick={downDoot}>Decrease</button>
            <h3>{upc}</h3>
            <FinalWeight weight={weight} count={itemCount} />
        </div>
    );
}

export default InventoryItem;