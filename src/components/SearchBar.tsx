interface SearchBarProps {
  searchValue: string;
  onChangeSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
const SearchBar = ({ searchValue, onChangeSearch }: SearchBarProps) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search movies..."
        value={searchValue}
        onChange={onChangeSearch}
      />
    </div>
  );
};

export default SearchBar;
