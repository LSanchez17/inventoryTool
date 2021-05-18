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

    return <svg key={upc} id={upcId} className={type} data-testid='upcTest'></svg>
}

export default useBarcode;