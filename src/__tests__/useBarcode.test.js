import useBarcode from '../helpers/useBarcode'
import React from 'react'
import InventoryItem from '../components/InventoryItem'
import { render } from '@testing-library/react'

it('displays a upc after being given upc data', () => {
    const identifier = '1';
    const name = 'testchub';
    const weight = 5;
    const upc = "000111100234";
    const count = 0;
    
    const renderedComponent = render(<InventoryItem  
            identifier={identifier}
            name={name}
            weight={weight}
            upc={upc}
            count={count} />)

    //extract some data
    const chubName = renderedComponent.getByText(`${name}`);
    const upcId = renderedComponent.getAllByTestId('upcTest');
    const finalWeight = renderedComponent.getByText(`Total weight: ${0}lbs`);

    console.log(upcId.length)

    //test these rendered
    expect(chubName).toBeInTheDocument();
    expect(upcId.length).toBe(1);
    expect(finalWeight).toBeInTheDocument();

    //test the text itself is matching
    expect(chubName).toHaveTextContent('testchub');
    expect(finalWeight).toHaveTextContent('Total weight: 0lbs');
})