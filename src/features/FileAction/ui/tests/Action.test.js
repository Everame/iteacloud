import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { MemoryRouter } from 'react-router'
import Action from './../Action.jsx'
import { FolderAdd } from '../../../../shared/imgs/assets'

describe('Action button', () => {
    it('Action is render', () => {
        render(
            <MemoryRouter>
                <Action icon={FolderAdd} name="Создать папку" />
            </MemoryRouter>
        )
        expect(screen.getByTestId('action')).toBeInTheDocument()
    })

    it('Action is show', () => {
        render(
            <MemoryRouter>
                <Action
                    icon={FolderAdd}
                    name="Создать папку"
                    show={true}
                    download={false}
                    action={jest.fn()}
                />
            </MemoryRouter>
        )
        const btnClass = screen.getByTestId('action')
        expect(btnClass.classList.contains('show')).toBe(true)
    })
})
