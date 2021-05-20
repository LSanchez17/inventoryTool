import useBarcode from '../helpers/useBarcode'

const UPC = ({upc, type}) => {
    //uses helper function to render the UPC based on number and type
    //type is due to different barcode patterns between vendor and warehouse
    let render = useBarcode(upc, type)

    return(
        <div>
            {render}
        </div>
    )
}

export default UPC;