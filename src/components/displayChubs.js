import InventoryItem from './InventoryItem';

const DisplayChubs = ({chubs}) => {

    let meatChub = chubs.map((chub,idx) => {
        return <div className='grid grid-cols-1 gap-2 place-items-center'>
                    <InventoryItem key={chub.weight * Math.random()} 
                              identifier={chub.weight * idx}
                              name={chub.name} 
                              weight={chub.weight} 
                              upc={chub.upc}
                              count={chub.count} />
                </div>
      })

    let displayedItems = meatChub.map(item => item);

    return (
        <div>
            {displayedItems}
        </div>
    );
}

export default DisplayChubs;