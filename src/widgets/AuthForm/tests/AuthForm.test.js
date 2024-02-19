import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { MemoryRouter } from 'react-router'
import AuthForm from '../AuthForm.jsx'

describe('AuthForm', () => {
    it('Form is render', () => {
        const view = render(
            <MemoryRouter>
                <AuthForm />
            </MemoryRouter>
        )
        expect(view).toMatchSnapshot()
    })
})
