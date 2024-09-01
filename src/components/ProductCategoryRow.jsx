
function ProductCategoryRow({ category }) {
    return (
        <tr className="border border-black ">
            <th className="pt-3" colSpan={2}>{category}</th>
        </tr>
    )
}

export default ProductCategoryRow
