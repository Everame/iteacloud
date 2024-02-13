import { render} from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router';
import AuthForm from '../AuthForm';

describe("AuthForm", () => {
    it('Form is render', () => {  
        const form = render(
            <MemoryRouter>
              <AuthForm />
            </MemoryRouter>);
        expect(form).toMatchSnapshot();
    });
})