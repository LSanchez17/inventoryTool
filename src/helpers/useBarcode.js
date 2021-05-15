import jsBarcode from 'jsbarcode';
import { useEffect } from 'react';

const useBarcode = (upc) => {
    // console.log(typeof upc) string

    let upcId = `a${upc}`;
    //something something querySelector used by the library
    //does not support ids starting with numbers, so add a letter?

    useEffect(() => {
        jsBarcode(`#${upcId}`, upc);
    }, []);

    return (
        <>
        <svg id={upcId}></svg>
        </>
    );
}

export default useBarcode;