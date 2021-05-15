import React from 'react'
import {render} from '@testing-library/react'
import FinalWeight from '../components/finalWeight'

it('renders the component', () => {
    render(<FinalWeight />);
})

it('updates the total weight with props', () => {
    let weight = 5;
    let count = 2;

    let {getByText} = render(<FinalWeight weight={weight} count={count} />);

    expect(getByText(`Total weight: 10lbs`)).toBeInTheDocument();
})
