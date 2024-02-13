import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router';
import MainHeader from '../MainHeader';

describe("Header", () => {
    it('Header is render', () => {  
        const header = render(
            <MemoryRouter>
              <MainHeader />
            </MemoryRouter>);
        expect(header).toMatchSnapshot();
    });
})