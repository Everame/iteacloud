import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router';
import BackBtn from './../BackBtn';

describe("BackBtn", () => {
    it('BackBtn is render', () => {  
        render(
            <MemoryRouter>
              <BackBtn isShow={true} setIndex={jest.fn()} back={jest.fn()}/>
            </MemoryRouter>);
        expect(screen.getByTestId('backBtn')).toBeInTheDocument();
    });

    it('BackBtn is show', () => {  
        render(
            <MemoryRouter>
              <BackBtn isShow={true} setIndex={jest.fn()} back={jest.fn()}/>
            </MemoryRouter>);
        const btnClass = screen.getByTestId('backBtn');
        expect(btnClass.classList.contains('show')).toBe(true);
    });

})