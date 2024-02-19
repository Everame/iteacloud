import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { MemoryRouter } from 'react-router'
import FileButton from '../FileButton.jsx'

describe('FileButton', () => {
    it('FileButton is render', () => {
        render(
            <MemoryRouter>
                <FileButton type="folder" />
            </MemoryRouter>
        )
        expect(screen.getByTestId('fileButton')).toBeInTheDocument()
    })

    it('FileButton is selected', () => {
        render(
            <MemoryRouter>
                <FileButton dataIndex={0} curIndex={0} type="folder" />
            </MemoryRouter>
        )
        const btnClass = screen.getByTestId('fileButton')
        expect(btnClass.classList.contains('select')).toBe(true)
    })
})
