import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { MemoryRouter } from 'react-router'
import StorageSize from '../StorageSize.jsx'

describe('StorageSize', () => {
    it('StorageSize is render', () => {
        const view = render(
            <MemoryRouter>
                <StorageSize size={2457} maxSize={3.5} />
            </MemoryRouter>
        )
        expect(view).toMatchSnapshot()
    })
})
