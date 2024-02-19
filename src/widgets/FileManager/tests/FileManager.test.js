import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { MemoryRouter } from 'react-router'
import FileManager from '../FileManager.jsx'
// eslint-disable-next-line import/no-unresolved
import FileExecutor from '../../../processes/FileExecutor/FileExecutor'

describe('FileManager', () => {
    it('FileManager is render', () => {
        const FileExec = new FileExecutor()
        FileExec.reset()
        const view = render(
            <MemoryRouter>
                <FileManager />
            </MemoryRouter>
        )
        expect(view).toMatchSnapshot()
    })
})
