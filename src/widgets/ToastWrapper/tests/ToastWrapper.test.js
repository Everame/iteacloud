import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { MemoryRouter } from 'react-router'
import ToastWrapper from './../ToastWrapper.jsx'

describe('ToastWrapper', () => {
    it('ToastWrapper is render', () => {
        const view = render(
            <MemoryRouter>
                <ToastWrapper toast={null} setToast={jest.fn()} />
            </MemoryRouter>
        )
        expect(view).toMatchSnapshot()
    })
})
