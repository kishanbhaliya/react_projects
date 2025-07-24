import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Post Manager title', () => {
    render(<App />);
    const heading = screen.getByText(/Post Manager/i);
    expect(heading).toBeInTheDocument();
});