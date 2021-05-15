import useBarcode from '../helpers/useBarcode'

const UPC = ({upc}) => {
    let render = useBarcode(upc)
    
    return(
        <>
            {render}
        </>
    )
}

export default UPC;