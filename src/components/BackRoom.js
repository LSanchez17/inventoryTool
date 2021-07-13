import { useEffect } from 'react'
import BackRoomItem from './BackRoomItem'

const BackRoom = ({backRoomItems, show}) => {
    let divAttribute = '';

    useEffect(() => {
        if(show){
            divAttribute = 'visible';
        }
        else{
            divAttribute = 'invisible';
        }
    },[show]);

    let itemItself = backRoomItems.map((item,idx) => {
        let className = `${item.type} grid grid-cols-1 place-items-center`;
        return <div key={idx} className={className}>
                    <BackRoomItem key={idx} 
                              identifier={idx}
                              type={item.type}
                              name={item.name} 
                              upc={item.upc}
                              count={item.count} />
                </div>
    });

    return(
    <div className={divAttribute}>
    {itemItself}
    </div>
    )
}

export default BackRoom;