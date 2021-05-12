import InventoryItem from './InventoryItem';

const DisplayChubs = ({chubs}) => {

    let meatChub = chubs.map((chub,idx) => {
        return <InventoryItem key={chub.weight * Math.random()} 
                              identifier={chub.weight * idx}
                              name={chub.name} 
                              weight={chub.weight} 
                              upc={chub.upc}
                              count={chub.count} />
      })

    let displayedItems = meatChub.map(item => item);

    return (
        <div>
            {displayedItems}
        </div>
    );
}

export default DisplayChubs;