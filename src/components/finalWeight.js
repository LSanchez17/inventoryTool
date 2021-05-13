import { useState, useEffect } from "react";

const FinalWeight = ({weight, count}) => {
    let [itemWeight, setWeight] = useState(weight*count);

    useEffect(() => {
        setWeight(weight*count);
    }, [count])
    
    return (
        <div>
            <p>{itemWeight}lbs</p>
        </div>
    )
}

export default FinalWeight;