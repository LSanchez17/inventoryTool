import { useState } from "react"
import BackRoomCounter from "./BackRoomCounter"
import UPC from './UPC'

const BackRoomItem = ({ identifier, type, name, upc, count}) => {
    //keeps track of how many chubs of an individual item
    let [itemCount, setCount] = useState(count);

    let upDoot = async () => {
        //updoot
        await setCount(itemCount + 1);
    }

    let upQuarterDoot = async () => {
        //increments by quarter of a unit
        await setCount(itemCount + .25);
    }

    let downQuarterDoot = async () => {
        //decrements by quarter of a unit
        if(itemCount === 0){
            return;
        }
        await setCount(itemCount - .25);
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
    let idNumber = (Math.random() * upc).toFixed(2);
    let className = `bg-blue-300 font-bold shadow-md font-sans rounded-2xl border-4 border-blue-500 border-opacity-25 m-2 p-1  object-contain`;

    return (
        <div className={className} key={idNumber}>
            <h2>{name}</h2>
            <h3 id={type}>Count Type: {type}</h3>
            <BackRoomCounter countId={countId} count={itemCount} plusOne={upDoot} minusOne={downDoot} plusQuarter={upQuarterDoot} minusQuarter={downQuarterDoot}/>
            <UPC upc={upc} type={type}/>
        </div>
    );
}

export default BackRoomItem;