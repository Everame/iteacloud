import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router';
import FileManager from '../FileManager';
import FileExecutor from '../../../processes/FileExecutor/FileExecutor';

describe("FileManager", () => {
    it('FileManager is render', () => {  
        const FileExec = new FileExecutor();
        FileExec.reset();
        const manager = render(
            <MemoryRouter>
              <FileManager />
            </MemoryRouter>);
        expect(manager).toMatchSnapshot();
    });
})