
function SearchBar({ filterText, inStockOnly, onFilterChange, onInStockOnlyChange }) {
    return (
        <>
            <div>
                <label htmlFor="search">Search: </label>
                <input
                    type="input"
                    id="search"
                    className="border border-black"
                    value={filterText}
                    onChange={(e) => onFilterChange(e.target.value)}
                    placeholder="Search..." />
            </div>
            <div>
                <input
                    type="checkbox"
                    id="check"
                    checked={inStockOnly}
                    onChange={e => onInStockOnlyChange(e.target.checked)} />
                <label htmlFor="check">{" "}Only show products in stock</label>
            </div>
        </>
    )
}

export default SearchBar;
