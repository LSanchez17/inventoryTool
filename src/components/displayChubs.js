import InventoryItem from './InventoryItem';

const DisplayChubs = ({chubs}) => {

    let meatChub = chubs.map((chub,idx) => {
        return <div className='grid grid-cols-1 gap-2 place-items-center'>
                    <InventoryItem key={idx} 
                              identifier={chub.weight * idx}
                              name={chub.name} 
                              weight={chub.weight} 
                              upc={chub.upc}
                              count={chub.count} />
                </div>
      })

    return (
        <div>
            {meatChub}
        </div>
    );
}

export default DisplayChubs;