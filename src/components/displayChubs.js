import PrivateOnly from './PrivateOnly';
import BoarsOnly from './BoarsOnly';
import {useState, useEffect} from 'react'

const DisplayChubs = ({chubs}) => {
    //split the chubs into these two
    let [boarsHead, setBoarsHead] = useState();
    let [privateSelection, setPrivateSelection] = useState();
    //keeps track of which to show and hide
    let [privateOnly, setPrivateOnly] = useState(false);
    let [boarsOnly, setBoarsOnly] = useState(false);

    useEffect(() => {
        //split main chub list into two
        let bh = [];
        let ps = [];

        chubs.forEach(chub => {
            if(chub.type === 'PS'){
                ps.push(chub);
            }
            if(chub.type === 'BH'){
                bh.push(chub);
            }
        });

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

    return (
        <div>
            <button className='bg-black text-yellow-300 rounded-2xl border-4 p-2 m-2' onClick={showBH}>Show Boar's Head</button>
            <button className='bg-blue-500 text-white rounded-2xl border-4 p-2 m-2' onClick={showPS}>Show Private Selection</button>
            {privateOnly ? <PrivateOnly chubs={privateSelection}/> : ''}
            {boarsOnly ? <BoarsOnly chubs={boarsHead}/> : ''}
        </div>
    );
}

export default DisplayChubs;