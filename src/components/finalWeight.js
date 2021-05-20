import { useState, useEffect } from "react";

const FinalWeight = ({weight, count}) => {
    //grabs the weight of the item, and the most current coutn value
    let [itemWeight, setWeight] = useState(weight*count);

    useEffect(() => {
        setWeight(weight*count);
    }, [count, weight])
    
    return (
        <div>
            <p className='bg-gray-200 p-1 m-2 rounded'>Total weight: {itemWeight}lbs</p>
        </div>
    )
}

export default FinalWeight;