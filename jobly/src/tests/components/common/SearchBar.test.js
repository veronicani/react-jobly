import { render, screen, fireEvent } from 'src/tests/setup/testUtils';
import SearchBar from 'src/components/common/SearchBar/SearchBar';

describe('SearchBar', () => {
  test('renders search input and button', () => {
    const mockSearch = jest.fn();
    render(<SearchBar search={mockSearch} searchTerm="" />);

    expect(screen.getByPlaceholderText('Enter search term')).toBeInTheDocument();
    expect(screen.getByText('Search!')).toBeInTheDocument();
  });

  test('user changes search term and clicks button', () => {
    const mockSearch = jest.fn();
    render(<SearchBar search={mockSearch} searchTerm="" />);

    const input = screen.getByPlaceholderText('Enter search term');
    const button = screen.getByText('Search!');

    fireEvent.change(input, { target: { value: 'software engineer' } });
    fireEvent.click(button);
    expect(mockSearch).toHaveBeenCalledWith('software engineer');
    expect(mockSearch).toHaveBeenCalledTimes(1);
  });
});
