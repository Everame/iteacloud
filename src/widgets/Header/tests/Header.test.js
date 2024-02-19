import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { MemoryRouter } from 'react-router'
import MainHeader from '../MainHeader.jsx'

describe('Header', () => {
    it('Header is render', () => {
        const view = render(
            <MemoryRouter>
                <MainHeader />
            </MemoryRouter>
        )
        expect(view).toMatchSnapshot()
    })
})
