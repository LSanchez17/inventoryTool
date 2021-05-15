import React from 'react'
import {render} from '@testing-library/react'
import ChubCounter from '../components/ChubCounter'

const countId = 0;
const count = 0;
const plusOne = () => {
    return count += 1;
}
const minusOne = () => {
    return count -= 1;
}

it('renders just the component', () => {
    render(<ChubCounter />)
})

it('renders the count prop passed in', () => {
    const {getByText} = render(<ChubCounter 
                                countId={countId}
                                count={count}
                                plusOne={plusOne}
                                minusOne={minusOne} />)
    expect(getByText(`# of chubs: ${count}`)).toBeInTheDocument();
})

//add testing of function calls