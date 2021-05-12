import { useState } from "react"

const InventoryItem = ({identifier, name, weight, upc, count}) => {
    let [itemCount, setCount] = useState(count);
    let [itemWeight, setWeight] = useState(weight);

    const upDoot = () => {
        setCount(itemCount => itemCount + 1);
        console.log(itemWeight, itemCount)
        calculate();
        console.log(itemWeight, itemCount)
    }

    const downDoot = () => {
        setCount(itemCount => itemCount - 1);
        calculate();
    }

    const calculate = () => {
        setWeight(itemWeight => itemWeight * itemCount);
    }
    
    let countId = `count${identifier}`;
    let inventoryId = `inventory${identifier}`;
    let weightId = `weight${identifier}`;
    let idNumber = Math.random() * weight;

    return (
        <div key={idNumber}>
            <h2>{name}</h2>
            <h3 id={weightId}>Weight: {weight}</h3>
            <button onClick={upDoot}>Increase</button>
            <h3 id={countId}>Count {itemCount}</h3>
            <button onClick={downDoot}>Decrease</button>
            <h3>{upc}</h3>
            <h3 id={inventoryId}>Total Weight: {itemWeight}</h3>
        </div>
    );
}

export default InventoryItem;