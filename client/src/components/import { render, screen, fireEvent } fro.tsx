import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Footer from './footer';

test('renders the correct pathname', () => {
  render(
    <MemoryRouter initialEntries={['/about']}>
      <Footer />
    </MemoryRouter>
  );

  const pathnameElement = screen.getByText('/about');
  expect(pathnameElement).toBeInTheDocument();
});

test('navigates back when Go Back button is clicked', () => {
  const mockNavigate = jest.fn();
  jest.mock('react-router-dom', () => ({
    useLocation: jest.fn().mockReturnValue({ pathname: '/about' }),
    useNavigate: jest.fn().mockReturnValue(mockNavigate),
  }));

  render(<Footer />);

  const goBackButton = screen.getByText('Go Back');
  fireEvent.click(goBackButton);

  expect(mockNavigate).toHaveBeenCalledWith(-1);
});