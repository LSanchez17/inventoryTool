const BackRoomCounter = ({countId, count, plusOne, minusOne, plusQuarter, minusQuarter}) => {
    //localize the state to an individual component, calls parent functions
    const callPlusOne = () => {
        plusOne();
    }

    const callMinusOne = () => {
        minusOne();
    }

    const callQuarterUp = () => {
        plusQuarter();
    }

    const callQuarterDown = () => {
        minusQuarter();
    }

    return(
        <div>
            <button className='font-medium hover:bg-blue-700 rounded-full py-1 px-1 border-2 m-2 border-blue-800' onClick={callPlusOne}>Increase + 1</button>
            <button className='font-medium hover:bg-blue-700 rounded-full py-1 px-1 border-2 m-2 border-blue-500' onClick={callQuarterUp}>Increase + .25</button>
            <h3 id={countId} className='bg-gray-200 p-1 m-1 rounded'># of items: {count}</h3>
            <button className='font-medium hover:bg-blue-700 rounded-full py-1 px-1 border-2 m-2 border-red-500' onClick={callQuarterDown}>Decrease + .25</button>
            <button className='font-medium hover:bg-red-700 rounded-full py-1 px-1 border-2 m-2 border-red-800' onClick={callMinusOne}>Decrease - 1</button>
        </div>
    )
}

export default BackRoomCounter;