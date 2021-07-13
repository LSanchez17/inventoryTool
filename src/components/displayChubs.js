import PrivateOnly from './PrivateOnly';
import BoarsOnly from './BoarsOnly';
import BackRoom from './BackRoom';
import {useState, useEffect} from 'react'

const DisplayChubs = ({chubs, backRoomItems}) => {
    //split the chubs into these two
    let [boarsHead, setBoarsHead] = useState();
    let [privateSelection, setPrivateSelection] = useState();
    //keeps track of which to show and hide
    let [privateOnly, setPrivateOnly] = useState(false);
    let [boarsOnly, setBoarsOnly] = useState(false);
    //handles backroom itesm
    let [backRoom, setBackRoom] = useState();
    let [showBackRoom, setShowBackRoom] = useState(false);

    useEffect(() => {
        //split main chub list into two
        let bh = [];
        let ps = [];
        let nonBulkItems = [];

        chubs.forEach(chub => {
            if(chub.type === 'PS'){
                ps.push(chub);
            }
            if(chub.type === 'BH'){
                bh.push(chub);
            }
        });

        backRoomItems.forEach(item => {
            nonBulkItems.push(item);
        })

        setBackRoom(nonBulkItems);
        setBoarsHead(bh);
        setPrivateSelection(ps);
    }, [])
    
    const showPS = () => {
        //update state and save it
        setPrivateOnly(privateOnly => !privateOnly);
    }

    const showBH = () => {
        //update state and save it
        setBoarsOnly(boarsOnly => !boarsOnly);
    }

    const toggleBackRoom = () => {
        //show backroom items
        setShowBackRoom(showBackRoom => !showBackRoom);
    }

    return (
        <div>
            <button className='bg-gray text-white rounded-2xl border-4 p-2 m-2' onClick={toggleBackRoom}>Show Backroom</button>
            <button className='bg-black text-yellow-300 rounded-2xl border-4 p-2 m-2' onClick={showBH}>Show Boar's Head</button>
            <button className='bg-blue-500 text-white rounded-2xl border-4 p-2 m-2' onClick={showPS}>Show Private Selection</button>
            {privateOnly ? <PrivateOnly chubs={privateSelection} show={privateOnly}/> : ''}
            {boarsOnly ? <BoarsOnly chubs={boarsHead} show={boarsOnly}/> : ''}
            {showBackRoom ? <BackRoom backRoomItems={backRoom} show={showBackRoom} /> : ''}
        </div>
    );
}

export default DisplayChubs;