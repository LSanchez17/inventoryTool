const ChubCounter = ({countId, count, plusOne, minusOne}) => {

    const callPlusOne = () => {
        plusOne();
    }

    const callMinusOne = () => {
        minusOne();
    }

    return(
        <div>
            <button className='font-medium hover:bg-blue-700 rounded-full py-1 px-1 border-2 m-2 border-blue-800' onClick={callPlusOne}>Increase + 1</button>
            <h3 id={countId} className='bg-gray-200 p-1 m-1 rounded'># of chubs: {count}</h3>
            <button className='font-medium hover:bg-red-700 rounded-full py-1 px-1 border-2 m-2 border-red-800' onClick={callMinusOne}>Decrease - 1</button>
        </div>
    )
}

export default ChubCounter;