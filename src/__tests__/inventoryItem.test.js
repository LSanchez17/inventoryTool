import React from 'react'
import {render} from '@testing-library/react'
import InventoryItem from '../components/InventoryItem'

it('renders the component', () => {
    render(<InventoryItem />);
})

it('takes a weight prop', () => {
    let weight = 5;

    const {getByText} = render(<InventoryItem weight={weight} />);

    expect(getByText('Weight: 5lbs')).toBeInTheDocument();
})