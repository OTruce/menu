
export default function SearchBar({ search, setSearch }) {
  return (
    <input
      placeholder="Search menu..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}