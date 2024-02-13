import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router';
import ToastWrapper from './../ToastWrapper';

describe("ToastWrapper", () => {
    it('ToastWrapper is render', () => {  
        const toastWrapper = render(
            <MemoryRouter>
              <ToastWrapper toast={null} setToast={jest.fn()}/>
            </MemoryRouter>);
        expect(toastWrapper).toMatchSnapshot();
    });
})