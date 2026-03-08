import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, beforeEach } from 'vitest';
import App from '../App';

beforeEach(() => {
  window.history.pushState(null, '', '/');
});

describe('Navigation', () => {
  it('renders home page by default', () => {
    render(<App />);
    expect(screen.getByText('Engineering Summer Fng')).toBeInTheDocument();
  });

  it('navigates to Technology page', async () => {
    render(<App />);
    await userEvent.click(screen.getByRole('link', { name: 'Technology' }));
    expect(screen.getByText('AI Technology')).toBeInTheDocument();
  });

  it('navigates to Education page', async () => {
    render(<App />);
    await userEvent.click(screen.getByRole('link', { name: 'Education' }));
    expect(screen.getByText(/Education/)).toBeInTheDocument();
  });

  it('navigates back to Home from another page', async () => {
    render(<App />);
    await userEvent.click(screen.getByRole('link', { name: 'Technology' }));
    await userEvent.click(screen.getByRole('link', { name: 'Home' }));
    expect(screen.getByText('Engineering Summer Fng')).toBeInTheDocument();
  });
});
