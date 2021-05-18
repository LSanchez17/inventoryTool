import useBarcode from '../helpers/useBarcode'

const UPC = ({upc, type}) => {
    let render = useBarcode(upc, type)

    return(
        <div>
            {render}
        </div>
    )
}

export default UPC;