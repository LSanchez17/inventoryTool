import jsBarcode from 'jsbarcode';
import { useEffect } from 'react';

const useBarcode = (upc, type) => {
    // console.log(typeof upc) string

    let upcId = `a${upc}`;
    //something something querySelector used by the library
    //does not support ids starting with numbers, so add a letter?
    //upon further reasearch, querySelector cannot select ids starting with a number
    //so we add a letter before the number to allow selection

    useEffect(() => {
        // console.log(type)
        type === 'BH' ? jsBarcode(`#${upcId}`, upc) : jsBarcode(`#${upcId}`, upc, {format: 'CODE39'});
    });
    let fitScreen = `${type} w-96`;

    return (
        <div className='w-96'>
            <svg key={upc} id={upcId} className={fitScreen} data-testid='upcTest'></svg>
        </div>
    );
}

export default useBarcode;