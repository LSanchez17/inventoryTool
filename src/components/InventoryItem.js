import { useEffect, useState } from "react"

const InventoryItem = ({identifier, name, weight, upc, count}) => {
    let [itemCount, setCount] = useState(count);
    let [itemWeight, setWeight] = useState(weight);

    useEffect(() => {
        const calculate = () => {
            console.log(itemWeight, itemCount)
            setWeight(itemWeight => itemWeight * itemCount);
        }

        calculate();
    }, [itemCount]);
    
    let countId = `count${identifier}`;
    let inventoryId = `inventory${identifier}`;
    let weightId = `weight${identifier}`;
    let idNumber = Math.random() * weight;

    return (
        <div key={idNumber}>
            <h2>{name}</h2>
            <h3 id={weightId}>Weight: {weight}lbs</h3>
            <button onClick={() => setCount(itemCount + 1)}>Increase</button>
            <h3 id={countId}># of chubs: {itemCount}</h3>
            <button onClick={() => setCount(itemCount -1)}>Decrease</button>
            <h3>{upc}</h3>
            <h3 id={inventoryId}>Total: {itemWeight}lbs</h3>
        </div>
    );
}

export default InventoryItem;