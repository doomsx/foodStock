import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

function ProductTable({ products, filterText, inStockOnly }) {
    const row = []
    let lastCategory = null

    products.forEach(product => {
        if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
            return;
        }

        if (inStockOnly && !product.stocked) {
            return;
        }

        if (product.category !== lastCategory) {
            row.push(<ProductCategoryRow
                category={product.category}
                key={product.category} />
            )
        }

        row.push(<ProductRow
            product={product}
            key={product.name} />
        )

        lastCategory = product.category
    });

    return (
        <table className="w-full mt-5">
            <thead>
                <tr className="border border-black">
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody className="border border-black">{row}</tbody>
        </table>
    )
}

export default ProductTable
