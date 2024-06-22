import { render, screen, cleanup } from '@testing-library/react';
import Page from '@/app/page';

describe('Page', () => {
  beforeEach(() => render(<Page />));
  afterEach(cleanup);

  it('renders the logo', () => {
    const logo = screen.getByRole('img');
    expect(logo).toBeInTheDocument();
    expect(logo.getAttribute('alt')).toBe('Next.js Logo');
  });

  it('renders the button', () => {
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Check server IP');
  });
})