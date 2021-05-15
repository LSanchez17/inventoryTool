import React from 'react'
import {render} from '@testing-library/react'
import DisplayChubs from '../components/displayChubs'
import chubs from '../helpers/chubs'

it('renders data from JSON object', () => {
    render(<DisplayChubs chubs={chubs}/>);
})