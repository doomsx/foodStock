import { useState } from "react"
import ProductTable from "./ProductTable"
import SearchBar from "./SearchBar"

function FilterableProducts({ products }) {
    const [filterText, setFilterText] = useState("")
    const [inStockOnly, setInStockOnly] = useState(false)
    return (
        <div className="p-5">
            <SearchBar
                filterText={filterText}
                inStockOnly={inStockOnly}
                onFilterChange={setFilterText}
                onInStockOnlyChange={setInStockOnly} />

            <ProductTable
                products={products}
                filterText={filterText}
                inStockOnly={inStockOnly} />
        </div>
    )
}

export default FilterableProducts
