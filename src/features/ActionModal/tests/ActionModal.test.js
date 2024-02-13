import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router';
import ActionModal from './../ActionModal';

describe("Action modal", () => {
    it('Action modal window is render', () => {  
        render(
            <MemoryRouter>
              <ActionModal />
            </MemoryRouter>);
        expect(screen.getByTestId('modalAction')).toBeInTheDocument();
    });

    it('Action modal window is show', () => {  
        render(
            <MemoryRouter>
              <ActionModal show={true} />
            </MemoryRouter>);
        const modal = screen.getByTestId('modalAction');
        expect(modal.classList.contains('show')).toBe(true);
    });

})