import InventoryItem from './InventoryItem';

const DisplayChubs = ({chubs}) => {
    let LARGENUM = 99999;

    let meatChub = chubs.map((chub,idx) => {
        return <div className='grid grid-cols-1 gap-2 place-items-center'>
                    <InventoryItem key={Math.floor(Math.random() * LARGENUM)} 
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